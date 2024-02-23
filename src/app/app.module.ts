import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { CoreModule } from './modules/core/core.module';
import { ClinicModule } from './modules/clinic/clinic.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ClinicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
