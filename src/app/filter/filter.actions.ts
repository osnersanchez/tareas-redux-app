import { Action } from "@ngrx/store";

export const SET_FILTER = "[Filter] Set filtro"

export type filterVal = 'all' | 'complet' | 'pending';

export class SetFilterAction implements Action{
    readonly type: string = SET_FILTER;

    constructor(public filtro: filterVal) { }
}

export type Acciones = SetFilterAction;