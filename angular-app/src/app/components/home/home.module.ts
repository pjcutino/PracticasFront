import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebFunctionComponent } from './web-function/web-function.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeAboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, WebFunctionComponent, HomeAboutComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    HomeRoutingModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
