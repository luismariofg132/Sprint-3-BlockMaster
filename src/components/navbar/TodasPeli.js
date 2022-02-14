import React from 'react'
import RenderPeliculas from './RenderPeliculas'

const TodasPeli = () => {
    return (
        <>
            <h1 className='titleContentPelis'>Todas la peliculas</h1>
            <RenderPeliculas />
        </>
    )
}

export default TodasPeli