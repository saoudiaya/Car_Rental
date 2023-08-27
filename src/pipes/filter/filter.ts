import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    if (!value || !term) {
      return value;
    }

    return value.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
  }
}