import { getAuth } from "firebase/auth";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/types";

export const consultaTypeUser = () => {
    return async (dispatch) => {
        const auth = getAuth()
        const user = auth.currentUser;
        const uid = user.uid
        const usuarioRef = collection(db, "Usuarios")
        const q = query(usuarioRef, where("uid", "==", uid), limit(3))
        const usuario = await getDocs(q)
        usuario.forEach((doc) => {
            const datos = doc.data()
            const admin = datos.admin
            dispatch(typeUser(admin))
            console.log(admin);
        })
    }
}


export const typeUser = (admin) => {
    return {
        type: types.typeUser,
        payload: admin
    }
}