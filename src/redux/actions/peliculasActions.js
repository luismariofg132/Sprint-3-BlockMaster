import { typesPeliculas } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, limit, orderBy, query, where, } from "firebase/firestore";


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

export const BuscarPeliculaAsyn = (Nombre) => {
    return async (dispatch) => {
        const peliculasRef = collection(db, "Peliculas");
        const q = query(peliculasRef, where("titulo", "==", Nombre));
        const querySnapshop = await getDocs(q)
        querySnapshop.forEach((doc) => {
            const data = doc.data()
            console.log(data);
            dispatch(BuscarPelicula(data))
        })
    }
}

export const BuscarPelicula = (Datos) => {
    return {
        type: typesPeliculas.search,
        payload: Datos
    }
}

export const listPeliSyn = (peliculas) => {
    return {
        type: typesPeliculas.list,
        payload: peliculas
    }
}