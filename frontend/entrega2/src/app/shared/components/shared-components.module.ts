import { NgSelectModule } from '@ng-select/ng-select';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilesComponent } from './list-files/list-files.component';
import { NewFileComponent } from './new-file/new-file.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [ListFilesComponent, NewFileComponent, MapViewComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    AgmCoreModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    NgxLoadingModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  exports: [
    ListFilesComponent,
    NewFileComponent,
    MapViewComponent,
  ],

})
export class SharedComponentsModule { }
