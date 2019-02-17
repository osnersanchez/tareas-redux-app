import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppReducer } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { filterVal } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styles: []
})
export class ListTodoComponent implements OnInit {

  public list: Todo[] = [];
  public filter: filterVal = 'all';

  constructor(
    private store:Store<AppReducer>
  ) { }

  ngOnInit() {
    this.store.select('todos').subscribe( list=> this.list = list);
    this.store.select('filter').subscribe( val=> this.filter = val);
  }

}
