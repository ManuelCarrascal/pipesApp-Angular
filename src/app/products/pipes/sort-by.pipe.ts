import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
  standalone: false,
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    if (sortBy === 'name') {
      return heroes.sort((a, b) => (a.name ? -1 : 1));
    }
    if (sortBy === 'canFly') {
      return heroes.sort((a, b) => (a.canFly ? -1 : 1));
    }

    if (sortBy === 'color') {
      return heroes.sort((a, b) => (a.color ? -1 : 1));
    }
    return heroes;
  }
}
