import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarJacComponent } from './components/navbar-jac/navbar-jac.component';
import { RuletaComponent } from './components/ruleta/ruleta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJacComponent,
    RuletaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
