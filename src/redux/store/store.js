import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { loginReducer, peliculasReducers, registerReducer, typeUserReducer } from "../reducers/reducers";


const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    user: typeUserReducer,
    login: loginReducer,
    regiter: registerReducer,
    pelicula: peliculasReducers
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)