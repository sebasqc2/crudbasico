import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContactoseditComponent } from './components/contactosedit/contactosedit.component';
import { APP_ROUTING } from './app.routes';
import { ContactosService } from './services/contactos.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContactoseditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ContactosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
