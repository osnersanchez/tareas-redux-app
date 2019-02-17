import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import { filterVal } from './filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filterVal): any {

    switch (filtro) {
      case 'all':
        return todos;
      case 'complet':
        return todos.filter(val => val.Complet);
      case 'pending':
        return todos.filter(val => !val.Complet);
      default:
        return todos;
    }
  }

}
