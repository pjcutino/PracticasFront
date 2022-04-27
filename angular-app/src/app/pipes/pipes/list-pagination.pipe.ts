import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from 'src/app/core/services/request-api/models/pokemon';

@Pipe({
  name: 'listPagination'
})
export class ListPaginationPipe implements PipeTransform {

  transform(items: IPokemon[], page: number, maxPokemon: number): IPokemon[] {

      // return empty array if array is falsy
      if (!items) { return []; }
      
      return [ ...items.slice( maxPokemon*(page) , maxPokemon*(page+1)  )]
  }

}
