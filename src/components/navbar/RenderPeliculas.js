import React from 'react'

const RenderPeliculas = ({ peli }) => {
    return (
        <div>
            <div className='cardPelicula'>
                <img src={peli.imagen} alt='pelicula' />
            </div>
        </div>
    )
}

export default RenderPeliculas