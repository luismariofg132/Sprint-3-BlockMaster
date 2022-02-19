import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPeliculasAsyn } from '../../redux/actions/peliculasActions'


const TodasPeli = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPeliculasAsyn())
        console.log('Me monte');
    }, [])

    const { peliculas } = useSelector(store => store.pelicula)


    return (
        <>
            <h1 className='titleContentPelis'>Todas la peliculas</h1>
            {
                peliculas?.map((peli, index) => (
                    <div key={index} className='cardPelicula'>
                        <img src={peli.imagen} alt="imagen" />
                    </div>
                ))
            }
        </>
    )
}

export default TodasPeli