import { Todo } from "./todo/models/todo.model";
import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from "./todo/todo.reducer";
import { filterReducer } from "./filter/filter.reducer";
import { filterVal } from "./filter/filter.actions";

export interface AppReducer {
    todos: Todo[];
    filter: filterVal;
}

export const appReducers: ActionReducerMap<AppReducer> = {
    todos: todoReducer,
    filter: filterReducer
};
