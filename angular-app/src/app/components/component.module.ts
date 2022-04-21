import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './component-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    ComponentRoutingModule,
    RouterModule
  ],
  exports: [
    ListComponent,
    DetailComponent,
    HomeComponent
  ]
})
export class ComponentModule { }
