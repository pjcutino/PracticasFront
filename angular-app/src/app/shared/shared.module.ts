import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestAPIComponent } from './request-api/request-api.component';
import { RequestAPIService } from './request-api/services/request-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    RequestAPIComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    RequestAPIComponent,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    RequestAPIComponent
  ]
})
export class SharedModule {
  static forRoot(){
    return{
      ngModule: SharedModule,
      providers:[RequestAPIService]
    }
  }
 }
