import React, { memo, useState } from 'react'

const RenderPeliculas = memo(({ peliculas }) => {

    const [peliculaInfo, setPeliculaInfo] = useState({
        id: "",
        titulo: "",
        imagen: "",
        descripcion: ""
    })

    const { titulo, descripcion, imagen } = peliculaInfo

    const informacion = (id, titulo, imagen, descripcion) => {
        setPeliculaInfo({
            id: id,
            titulo: titulo,
            imagen: imagen,
            descripcion: descripcion
        })
        llamarModal()
    }

    const llamarModal = () => {
        window.location.href = "#openModal"
    }

    return (
        <>
            <div className='contenedorPelis'>
                {
                    peliculas?.map((peli, index) => (

                        <div className='cardPelicula' key={index}>
                            {/* <button type='button' className='btnPelicula'> */}
                            <img src={peli.imagen} alt='pelicula' onClick={() => informacion(peli.id, peli.titulo, peli.imagen, peli.descripcion)} />
                            <div className='card'>
                                <div className='putuacion'>
                                    <span>{peli.voto}</span>
                                </div>
                            </div>
                            {/* </button> */}
                        </div>
                    ))
                }
            </div>
            <div id="openModal" className="modalDialog">
                <div className='contenedorPeliculaModal'>
                    <div>
                        <img src={imagen} alt={titulo} className="imgModal" />
                    </div>
                    <div>
                        <a href="#close" title="Close" className="close">X</a>
                        <h2>{titulo}</h2>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>

        </>
    )
})

export default RenderPeliculas