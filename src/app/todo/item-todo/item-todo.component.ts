import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppReducer } from 'src/app/app.reducer';
import { ToggleTodo, EditarTodo, BorrarTodo } from '../todo.actions';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styles: []
})
export class ItemTodoComponent implements OnInit {

  @Input()
  todo: Todo

  @ViewChild('editTex') refEditText: ElementRef
  public chkFlied: FormControl;
  public txtInput: FormControl;

  public edit = false;

  constructor(
    private store: Store<AppReducer>
  ) { }

  ngOnInit() {
    this.chkFlied = new FormControl(this.todo.Complet);
    this.txtInput = new FormControl(this.todo.Texto, Validators.required);

    this.chkFlied.valueChanges.subscribe(val => {
      this.store.dispatch(new ToggleTodo(this.todo.Id))
    })
  }

  editar() {
    this.edit = true;
    setTimeout(() => {
      this.refEditText.nativeElement.select()
    }, 1);
  }

  endEdit() {
    this.edit = false;
    if (this.txtInput.valid)
      this.store.dispatch(new EditarTodo(this.todo.Id, this.txtInput.value))
  }

  delete(){
    this.store.dispatch(new BorrarTodo(this.todo.Id));
  }

}
