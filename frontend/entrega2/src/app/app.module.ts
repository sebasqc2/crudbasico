import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CrudServiceService } from './crud-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CrudServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
