import React from 'react'
import { useSelector } from 'react-redux'
import RenderPeliculas from './RenderPeliculas'

const TodasPeli = () => {

    const { Peliculas } = useSelector(store => store.pelicula)
    console.log(Peliculas);

    return (
        <>
            <h1 className='titleContentPelis'>Todas la peliculas</h1>
            <RenderPeliculas />
        </>
    )
}

export default TodasPeli