import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importación de rutas
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

//Importación de servicios
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrecioComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
