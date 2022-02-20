import { getAuth, signInWithPopup } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { db, google } from '../../firebase/firebaseConfig'
import { loginSincrono } from './loginSincrono'

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
                subirUsuario(user.uid, user.displayName, user.email)
            })
    }
}

export const subirUsuario = (id, nombre, email) => {
    const usuario = {
        nombre: nombre,
        uid: id,
        admin: false,
        email: email
    }
    addDoc(collection(db, "Usuarios"), usuario)
}