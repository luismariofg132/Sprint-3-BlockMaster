import { types, typesPeliculas } from "../types/types";

const initialState = {
    pelicula: []
}

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


export const typeUserReducer = (state = false, action) => {
    switch (action.type) {
        case types.typeUser:
            return {
                admin: action.payload
            }
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

export const peliculasReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPeliculas.list:
            return {
                peliculas: [...action.payload]
            }

        case typesPeliculas.search:
            return {
                Datos: action.payload
            }

        default:
            return state
    }
}