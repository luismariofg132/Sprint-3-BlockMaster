import { types, typesPeliculas } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.displayname
            }

        case types.logout:
            return {}
        default:
            return state
    }
}

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.register:
            return {
                id: action.payload.id,
                name: action.payload.username
            }

        default:
            return state
    }
}

export const peliculasReducers = (state = {}, action) => {
    switch (action.type) {
        case typesPeliculas.list:
            return {
                peliculas: [...action.payload]
            }

        default:
            return state
    }
}