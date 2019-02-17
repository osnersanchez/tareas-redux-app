import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppReducer } from 'src/app/app.reducer';
import { FormControl, Validators } from '@angular/forms';
import { AddTodo } from '../todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styles: []
})
export class AddTodoComponent implements OnInit {

  public textTodo: FormControl = new FormControl('', Validators.required)

  constructor(
    private store: Store<AppReducer>
  ) { }

  ngOnInit() {
  }

  addTodo() {
    if (this.textTodo.valid){
      this.store.dispatch(new AddTodo(this.textTodo.value))
      this.textTodo.reset();
    }
  }

}
