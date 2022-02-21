import { doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../firebase/firebaseConfig'
import { useForm } from '../../hooks/useForm'
import { BuscarPeliculaAsyn, listPeliculasAsyn } from '../../redux/actions/peliculasActions'

const Crud = () => {

    const dispatch = useDispatch()
    const { Datos } = useSelector(store => store.pelicula)

    const [values, handleInputChange, setValues] = useForm({
        titulo: '',
        voto: '',
        imagen: '',
        descripcion: '',
        id: '',
        uid: ''
    })

    const { titulo, voto, imagen, descripcion } = values



    const Buscar = () => {
        dispatch(BuscarPeliculaAsyn(titulo))
        MostrarDatos()
    }

    const Actualizar = async (Datos) => {
        const peliculaRef = doc(db, "Peliculas", Datos.uid)
        await updateDoc(peliculaRef, {
            titulo: Datos.titulo,
            voto: Datos.voto,
            descripcion: Datos.descripcion,
            imagen: Datos.imagen,
            id: Datos.id
        }).then(dispatch(listPeliculasAsyn()))
    }

    const MostrarDatos = () => {
        if (Datos !== undefined || Datos !== null) {
            setValues({
                titulo: Datos.titulo,
                voto: Datos.voto,
                imagen: Datos.imagen,
                descripcion: Datos.descripcion,
                id: Datos.id,
                uid: Datos.uid
            })
        }
    }

    const Eliminar = () => {

    }

    return (
        <div className='contFormCrud'>
            <div>
                <input type="text" name='titulo' onChange={handleInputChange} value={titulo} placeholder='Nombre Pelicula' />
            </div>
            <div>
                <input type="number" name='voto' onChange={handleInputChange} value={voto} placeholder='Voto' />
            </div>
            <div>
                <input type="text" name='imagen' onChange={handleInputChange} value={imagen} placeholder='Imagen' />
            </div>
            <div>
                <textarea name='descripcion' onChange={handleInputChange} value={descripcion} placeholder='Descripcion'></textarea>
            </div>
            <div>
                <button className='btnLogin' type='button'
                    onClick={() => Buscar()}
                >Buscar</button>
                <button className='btnLogin' type='button'>Agregar</button>
                <button className='btnLogin' type='button'
                    onClick={() => Actualizar(values)}
                >Actualizar</button>
                <button className='btnLogin' type='button'
                    onClick={() => Eliminar()}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Crud