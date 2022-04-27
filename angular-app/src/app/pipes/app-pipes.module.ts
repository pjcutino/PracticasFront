import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { ListPaginationPipe } from './pipes/list-pagination.pipe';
import { OrderByIdPipe } from './pipes/order-by-id.pipe';


@NgModule({
  declarations: [NameFilterPipe, ListPaginationPipe, OrderByIdPipe],
  imports: [
    CommonModule
  ],
  exports: [NameFilterPipe, ListPaginationPipe, OrderByIdPipe]
})
export class AppPipesModule { }
