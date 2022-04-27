import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from 'src/app/core/services/request-api/models/pokemon';

@Pipe({
  name: 'orderById',
  pure: true 
})
export class OrderByIdPipe implements PipeTransform {

  transform(items: IPokemon[]): IPokemon[] {
    items.sort(function sortByDate( a, b ) {
      if ( a.id < b.id ){
        return -1;
      }
      if ( a.id > b.id ){
        return 1;
      }
      return 0;
    });
    return items;
  }

}
