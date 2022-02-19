import { typesPeliculas } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";


export const listPeliculasAsyn = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "Peliculas"));
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