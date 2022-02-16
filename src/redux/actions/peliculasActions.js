import { typesPeliculas } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";

export const listPeliculasAsyn = () => {
    return async (dispatch) => {
        const consulta = await getDocs(collection(db, "Peliculas"));
        const Peliculas = []
        consulta.forEach((doc) => {
            Peliculas.push({
                ...doc.data()
            })
        })
        dispatch(listPeliSyn(Peliculas))
    }
}

export const listPeliSyn = (peliculas) => {
    return {
        type: typesPeliculas.list,
        payload: peliculas
    }
}