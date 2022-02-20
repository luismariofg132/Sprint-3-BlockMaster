import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/types";

export const consultaTypeUser = () => {
    return async (dispatch) => {
        const auth = getAuth()
        const user = auth.currentUser;
        const uid = user.uid
        const usuarioRef = collection(db, "Usuarios")
        const q = query(usuarioRef, where("uid", "==", uid))
        const usuario = await getDocs(q)
        usuario.forEach((doc) => {
            const datos = doc.data()
            const admin = datos.admin
            dispatch(typeUser(admin))
        })
    }
}


export const typeUser = (admin) => {
    return {
        type: types.typeUser,
        payload: admin
    }
}