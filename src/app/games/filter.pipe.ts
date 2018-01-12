import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, property: string): any [] {
    if (items && items.length) {
      if (property === 'popularity') {
        return items.filter((item: any) => item.game.popularity > item.viewers);
      } else if (property === 'viewers') {
        return items.filter((item: any) => item.viewers > item.game.popularity);
      } else {
        return items;
      }
    }
  }
}
