import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MegasApiService } from 'src/app/core/services/megas-api/megas-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    FormsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [FormsComponent],
  providers: [
    MegasApiService
  ]
})
export class FormsCModule { }
