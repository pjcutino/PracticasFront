import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ListRoutingModule } from './list-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RequestAPIService } from 'src/app/core/services/request-api/request-api.service';
import { FormsModule } from '@angular/forms';
import { AppPipesModule } from 'src/app/pipes/app-pipes.module';
import { TogglePaginatorComponent } from './toggle-paginator/toggle-paginator.component';
import { MegasApiService } from 'src/app/core/services/megas-api/megas-api.service';

@NgModule({
  declarations: [ListComponent,TogglePaginatorComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    ListRoutingModule,
    HttpClientModule,
    FormsModule,
    AppPipesModule
  ],
  exports: [ListComponent],
  providers: [
    RequestAPIService,
    MegasApiService
  ]
})
export class ListModule { }
