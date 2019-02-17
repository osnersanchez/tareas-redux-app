import { Component, OnInit } from '@angular/core';
import { filterVal, SetFilterAction } from 'src/app/filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppReducer } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { BorrarCompletTodo } from '../todo.actions';

@Component({
  selector: 'app-footer-todo',
  templateUrl: './footer-todo.component.html',
  styles: []
})
export class FooterTodoComponent implements OnInit {

  public filtros = [{
    name: 'Todos',
    val: 'all'
  }, {
    name: 'Completados',
    val: 'complet'
  }, {
    name: 'Pendientes',
    val: 'pending'
  }];

  public filterSelect: filterVal = 'all';
  public complet: number = 0;

  constructor(
    private store: Store<AppReducer>
  ) { }

  ngOnInit() {
    this.store.select('filter').subscribe( val => this.filterSelect = val);
    this.store.select('todos').subscribe( val => this.complet = val.filter(todo=>todo.Complet === true).length);

  }

  change(newFilter: filterVal){
    this.store.dispatch(new SetFilterAction(newFilter));
  }

  borrarComplet(){
    this.store.dispatch(new BorrarCompletTodo());
  }

}
