import { filterVal, Acciones, SET_FILTER } from "./filter.actions";


const stadoInicial: filterVal = 'all';

export const filterReducer = ( state= stadoInicial, action:Acciones ):filterVal => { 
    
    switch (action.type) {
        case SET_FILTER:
            return action.filtro;
    
        default:
            return state;
    }

} 