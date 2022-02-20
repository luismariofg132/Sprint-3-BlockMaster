import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPeliculasAsyn } from '../../redux/actions/peliculasActions'
import RenderPeliculas from './RenderPeliculas'


const TodasPeli = () => {

    const dispatch = useDispatch();
    const [numPeliculas, setNumPeliculas] = useState(40)

    const { peliculas } = useSelector(store => store.pelicula)

    useEffect(function llamarPeliculas() {
        dispatch(listPeliculasAsyn(numPeliculas))
    }, [numPeliculas, dispatch])


    const masPeliculas = () => {
        setNumPeliculas(numPeliculas + 30)
    }

    return (
        <>
            <h1 className='titleContentPelis'>Todas la peliculas</h1>
            <RenderPeliculas peliculas={peliculas} />
            <div className='contBtnMas'>
                <button className='btnMas' type='button' onClick={() => masPeliculas()}>Cargar Mas</button>
            </div>
        </>
    )
}

export default TodasPeli