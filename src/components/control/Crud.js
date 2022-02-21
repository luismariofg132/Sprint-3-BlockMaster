import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { BuscarPeliculaAsyn } from '../../redux/actions/peliculasActions'

const Crud = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange] = useForm({
        titulo: '',
        voto: '',
        imagen: '',
        descripcion: ''
    })

    const { titulo, voto, imagen, descripcion } = values

    const Buscar = () => {
        dispatch(BuscarPeliculaAsyn(titulo))
    }

    console.log(titulo)

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
            </div>
        </div>
    )
}

export default Crud