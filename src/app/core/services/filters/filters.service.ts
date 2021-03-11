import {Injectable} from '@angular/core';
import {Filters} from '../../interfaces/filter.interface';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private data: Filters [] = [
    {
      id: 1,
      name: 'Popular',
      isActive: true,
      key: 'popular',
    }, {
      id: 2,
      name: 'Top rated',
      isActive: false,
      key: 'top_rated'
    }, {
      id: 3,
      name: 'Upcoming',
      isActive: false,
      key: 'upcoming'
    }
  ]

  constructor() {
  }

  get(): Filters[] {
    return this.data;
  }
}
