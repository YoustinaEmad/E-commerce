import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], term: string): Product[] {
    return products.filter((prd) => prd.title.toLowerCase().includes(term.toLowerCase()));

  }

}
