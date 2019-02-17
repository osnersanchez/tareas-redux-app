import { Action } from "@ngrx/store";

export const ADD_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Completar todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const ALL_TOGGLE_TODO = '[TODO] Marcar todo';
export const BORRAR_COMPLET_TODO = '[TODO] Borrar completados';


export class AddTodo implements Action {
    readonly type = ADD_TODO;

    constructor(public payload: string) { }
}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public payload: number) { }
}

export class EditarTodo implements Action {
    readonly type = EDITAR_TODO;

    constructor(public Id:number, public Text: string) { }
}

export class BorrarTodo implements Action {
    readonly type = BORRAR_TODO;

    constructor(public Id:number) { }
}

export class AllToggleTodo implements Action {
    readonly type = ALL_TOGGLE_TODO;

    constructor(public Toggle:boolean) { }
}

export class BorrarCompletTodo implements Action {
    readonly type = BORRAR_COMPLET_TODO;
}

export type Acciones = AddTodo | ToggleTodo | EditarTodo | BorrarTodo | AllToggleTodo | BorrarCompletTodo;