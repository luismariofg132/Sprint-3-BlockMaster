import { typesPeliculas } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import { collection, doc, getDocs, limit, orderBy, query, updateDoc, where, } from "firebase/firestore";

// Listar
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

// Buscar
export const BuscarPeliculaAsyn = (Nombre) => {
    return async (dispatch) => {
        const peliculasRef = collection(db, "Peliculas");
        const q = query(peliculasRef, where("titulo", "==", Nombre));
        const querySnapshop = await getDocs(q)
        querySnapshop.forEach((doc) => {
            const data = doc.data()
            const DocId = doc.id;
            const datosPeli = {
                titulo: data.titulo,
                voto: data.voto,
                imagen: data.imagen,
                id: data.id,
                descripcion: data.descripcion,
                uid: DocId
            }
            dispatch(BuscarPelicula(datosPeli))
        })
    }
}

// Actualizar
export const ActualizarPeliculaAsyn = (Datos) => {
    return async (dispatch) => {
        const peliculaRef = doc(db, "Peliculas", Datos.id)
        console.log(peliculaRef)
        await updateDoc(peliculaRef, {
            Datos
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