import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from 'src/app/core/services/request-api/models/pokemon';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: IPokemon[], searchText: string): any[] {

    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if search text is empty
    if (!searchText) { return items; }

    // convert the searchText to lower case
    searchText = searchText.toLowerCase();

    // return the filtered array
    return items.filter(item => {
      if (item && (item.name.includes(searchText) || String(item.id) == searchText)) {
        console.log(searchText);
        return item;
      }
      return false;
    });
   }

}
