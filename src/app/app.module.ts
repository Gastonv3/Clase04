import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RedesComponent } from './components/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InicioComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
