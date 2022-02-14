import { getAuth, signInWithPopup } from 'firebase/auth'
import { google } from '../../firebase/firebaseConfig'
import { loginSincrono } from './loginSincrono'

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
            })
    }
}