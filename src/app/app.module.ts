import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { OperadorAndComponent } from './home/operadores/operador-and/operador-and.component';
import { OperadorOrComponent } from './home/operadores/operador-or/operador-or.component';
import { OperadorNotComponent } from './home/operadores/operador-not/operador-not.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    OperadorAndComponent,
    OperadorOrComponent,
    OperadorNotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
