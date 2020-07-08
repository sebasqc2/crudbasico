import { Component, OnInit, ElementRef, ViewChild, NgZone, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from '@agm/core/services/google-maps-types';
declare const google: any;



@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {


  @ViewChild('search')
  public searchElementRef: ElementRef;
  searchControl: FormControl;
  @Output() coordinatesEmitter: EventEmitter<any> = new EventEmitter();
  lat = 43.879078;
  lng = -103.4615581;
  selectedMarker;
  public zoom = 2;
  markers = [];
  currentLocation: any;
  addres: string;



  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  getCurrentLocation(latitude, longitude) {

    this.mapsAPILoader.load().then(() => {
      const geocoder = new google.maps.Geocoder;
      const latlng = { lat: latitude, lng: longitude };
      const that = this;
      geocoder.geocode({ 'location': latlng }, (results) => {
        if (results[0]) {
          that.zoom = 11;
          that.currentLocation = results[0].formatted_address;
          this.addres = that.currentLocation;
          const list = [this.lat, this.lng, this.addres];
          this.coordinatesEmitter.emit(list);

        } else {
          console.log('No results found');
        }
      });
    });

  }

  ngOnInit() {
    this.zoom = 4;
    this.lat = 39.8282;
    this.lng = -98.5795;

    this.searchControl = new FormControl();

    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  async addMarker(lat: number, lng: number) {
    await this.markers.pop();
    await this.markers.push({ lat, lng, alpha: 0.4 });
    this.lat = lat;
    this.lng = lng;
    await this.getCurrentLocation(lat, lng);

  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };



  }

}
