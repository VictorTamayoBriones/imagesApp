import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

import{ APP_ROUTES } from  './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component'
import { CargaImagenesService } from './services/carga-imagenes.service';
@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
