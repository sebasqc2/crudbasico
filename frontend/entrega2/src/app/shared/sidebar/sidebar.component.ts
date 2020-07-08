import { HandleServicesService } from './../handle/handle-services.service';
import { InfoMessagesService } from './../messages/info-messages.service';
import { CrudServiceService } from './../backend/cruds/crud-service.service';
import { FirebaseStorageService } from './../firebase/firebase-storage.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from './sidebar.metadata';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../storage-services/token-storage.service';


import * as $ from 'jquery';
import { SharedService } from '../shared/shared.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericResponseModel } from 'models/response/generic.response.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[] = [];
  public correoUsuario: String;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  public error;
  public load = false;
  public logo = false;

  clientValue = '';
  idClient = -1;
  @Output() emitterValueToSearch: EventEmitter<any> = new EventEmitter();
  @ViewChild(DatatableComponent) table: DatatableComponent;


  constructor(private router: Router,
    public translate: TranslateService,
    private crudServices: CrudServiceService,
    private firebaseServices: FirebaseStorageService,
    private token: TokenStorageService,
    private messageService: InfoMessagesService,
    private sharedService: SharedService,
    private handleService: HandleServicesService
  ) {

  }

  uploadLogo(event) {
    const file = event.target.files[0];
    this.firebaseServices.uploadFile(this.token.getCompanyId() + '/' + 'logos', 'logo', file).then((result) => {
      if (result) {
        this.firebaseServices.loadFile(this.token.getCompanyId() + '/' + 'logos', 'logo').then((url) => {
          document.querySelector('img').src = url + new Date().getTime()
          this.sharedService.setShareVariable(document.querySelector('img'));
        }).catch((err) => {
          document.querySelector('img').src = '../../../assets/img/logo.png';
        })
      }
    }).catch((error) => {
      this.handleService.handleError(error);
    })
  }

  isLogin() {
    if (this.token.getToken() === null) {
      return false
    } else {
      return true
    }
  }



  ngOnInit() {
    $.getScript('./assets/js/app-sidebar.js');
    if (this.isLogin()) {
      this.filterMenu();

      if (this.token.getCompanyId() !== null) {
        this.logo = true;
        this.firebaseServices.loadFile(this.token.getCompanyId() + '/' + 'logos', 'logo').then((url) => {
          document.querySelector('img').src = url + new Date().getTime()
          this.sharedService.setShareVariable(url);
        }).catch((error) => {
          document.querySelector('img').src = '../../../assets/img/logo.png';
        })
      }
    } else {
      if (ROUTES.length === 0) {
        const subMenuArrayWelcome = []
      }
      this.menuItems = ROUTES;
    }
  }

  filterMenu() {
    this.crudServices.getModel('api/modulos/obtener-modulos-menus-json').subscribe(
      (genericResponses: GenericResponseModel) => {
        if (genericResponses.code === 200) {
          const variable = genericResponses.answerList;
          // tslint:disable-next-line:forin
          for (const i in variable) {
            const subMenuArray = []
            for (const subMenu of variable[i].listMenu) {
              subMenuArray.push(
                {
                  path: subMenu.path, title: subMenu.title, icon: subMenu.icon, class:
                    '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                }
              )
            }
            const modulo: RouteInfo = {
              path: '', title: variable[i].module.name, icon: variable[i].module.icon,
              class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
              isExternalLink: false, submenu: subMenuArray
            }
            ROUTES.push(modulo);
            this.menuItems = ROUTES
          }
        } else {
          this.messageService.getInfoMessagePersonalized('error', genericResponses.answer, 'No se cargaron lo modulos')
        }
      },
      error => {
        this.handleService.handleError(error);
      }
    );
  }

  ngxWizardFunction(path: string) {
    if (path.indexOf('forms/ngx') !== -1) {
      this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    }
  }
}
