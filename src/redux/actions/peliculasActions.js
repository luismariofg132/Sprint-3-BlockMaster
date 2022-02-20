import { typesPeliculas } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, limit, orderBy, query, } from "firebase/firestore";


export const listPeliculasAsyn = (num) => {
    return async (dispatch) => {

        // const querySnapshot = await getDocs(collection(db, "Peliculas"))
        const referencia = collection(db, "Peliculas")
        const filtro = query(referencia, orderBy("titulo"), limit(num));
        const querySnapshot = await getDocs(filtro)

        const peliculas = []
        querySnapshot.forEach((doc) => {
            peliculas.push({
                ...doc.data()
            })
            dispatch(listPeliSyn(peliculas))
        });


    }
}

export const listPeliSyn = (peliculas) => {
    return {
        type: typesPeliculas.list,
        payload: peliculas
    }
}