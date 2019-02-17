import { Acciones, ADD_TODO, TOGGLE_TODO, EDITAR_TODO, BORRAR_TODO, ALL_TOGGLE_TODO, BORRAR_COMPLET_TODO } from "./todo.actions";
import { Todo } from "./models/todo.model";

const t3 = new Todo("Trabajar")
t3.Complet = true;

const stadoInicial: Todo[] = [
    new Todo("Estudiar"),
    new Todo("Aprender"),
    t3
];

export const todoReducer = (state = stadoInicial, action: Acciones) => {

    switch (action.type) {
        case ADD_TODO:
            return [...state, new Todo(action.payload)];

        case TOGGLE_TODO:

            return state.map(todo => {
                if (todo.Id === action.payload) {
                    return {
                        ...todo,
                        Complet: !todo.Complet
                    }
                }
                return todo;
            });

        case EDITAR_TODO:

            return state.map(todo => {
                if (todo.Id === action.Id) {
                    return {
                        ...todo,
                        Texto: action.Text
                    }
                }
                return todo;
            });

        case BORRAR_TODO:

            return state.filter(todo => todo.Id != action.Id);

        case ALL_TOGGLE_TODO:

            return state.map(todo => {
                return {
                    ...todo,
                    Complet: action.Toggle
                }
            });
        case BORRAR_COMPLET_TODO:

            return state.filter(todo => !todo.Complet);

        default:
            return state;
    }
}