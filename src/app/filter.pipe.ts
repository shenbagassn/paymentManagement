import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'console';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], selectOption: string, searchValue: any): any[] {
    var temparr = [];
    if (value.length == 0 || searchValue.length == 0) {
      return value;
    }
    switch (selectOption) {
      case "username":
        for (var i = 0; i < value.length; i++) {
          if (value[i].username.includes(searchValue)) {
            temparr.push(value[i]);
          }
        }
        break;
      case "price":
        for (var i = 0; i < value.length; i++) {
          if (value[i].price == searchValue) {
            temparr.push(value[i]);
          }
        }
        break;
      case "cardNo":
        for (var i = 0; i < value.length; i++) {
          if (value[i].cardNo.toString().includes(searchValue)) {
            temparr.push(value[i]);

          }
        }
        break;
  }return temparr;
}

}
