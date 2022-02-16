import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { types } from "../types/types";

export const RegistroEmailPass = (username, email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: username })
                dispatch(RegistroEmailPassSincrono(username, user.uid))
                console.log(user)
            })
            .catch(e => console.log(e))
    }
}

export const RegistroEmailPassSincrono = (username, id) => {
    return {
        type: types.register,
        payload: {
            username, id
        }
    }
}