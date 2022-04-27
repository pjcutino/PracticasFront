import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MegasApiService } from '../core/services/megas-api/megas-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CardListComponent, FormGroupComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [CardListComponent, FormGroupComponent]
})
export class SharedModule {
  static forRoot(){
    return{
      ngModule: SharedModule,
      providers:[MegasApiService]
    }
  }
 }
