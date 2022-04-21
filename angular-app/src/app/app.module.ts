import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestAPIComponent } from './shared/request-api/request-api.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestAPIService } from './shared/request-api/services/request-api.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    //RequestAPIComponent,
    HomeComponent,
    //NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [RequestAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
