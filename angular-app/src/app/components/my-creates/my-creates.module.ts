import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCreatesComponent } from './my-creates.component';
import { MyCreatesRoutingModule } from './my-creates-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MegasApiService } from 'src/app/core/services/megas-api/megas-api.service';
import { ModifyFormComponent } from './modify-form/modify-form.component';



@NgModule({
  declarations: [MyCreatesComponent, ModifyFormComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    MyCreatesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MyCreatesComponent
  ],
  providers: [
    MegasApiService
  ]
})
export class MyCreatesModule { }
