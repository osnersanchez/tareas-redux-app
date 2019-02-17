import { Component, OnInit } from '@angular/core';
import { AppReducer } from '../app.reducer';
import { Store } from '@ngrx/store';
import { AllToggleTodo } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public toggle:boolean = false;

  constructor(
    private store: Store<AppReducer>
  ) { }

  ngOnInit() {
  }

  marcar(){
    this.toggle = !this.toggle;
    this.store.dispatch(new AllToggleTodo(this.toggle));
  }

}
