import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { types } from "../types/types"
import { subirUsuario } from "./loginGoogle"

export const loginSincrono = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}

export const LoginUserPass = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    loginSincrono(user.uid, user.displayName)
                )
                subirUsuario(user.uid, user.displayName, user.email)
                console.log('sirvio')
            })
            .catch(e => console.log(e))
    }
}

