import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { listPeliSyn } from '../../redux/actions/peliculasActions'

const Navbar = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const { peliculas } = useSelector(store => store.pelicula)

    const [values, handleInputChange] = useForm({
        titulo: ""
    })

    const { titulo } = values

    const Buscar = (e) => {
        e.preventDefault()
        const tituloBuscar = titulo.toLocaleLowerCase()
        const resp = peliculas.filter(movie => movie.titulo.toLocaleLowerCase().includes(tituloBuscar))
        dispatch(listPeliSyn(resp))
    }



    return (
        <header>
            <span className='logo'>
                <img src='https://res.cloudinary.com/ddgyxfetd/image/upload/v1644598822/sprint%203/logo-blockBuster_wtclop.png' alt='logo'
                    onClick={() =>
                        Navigate('/')
                    }
                />
            </span>
            <nav>
                <ul>
                    <li>Todas</li>
                    <li>Mas Valoradas</li>
                    <li>Menos Valoradas</li>
                    <li><Link to="perfil" className='links'>Perfil</Link></li>
                    <li>
                        <form onSubmit={Buscar}>
                            <input
                                type='text'
                                name='titulo'
                                className='inputHeader'
                                placeholder='Busca tu pelicula favorita'
                                value={titulo}
                                onChange={handleInputChange}
                            />
                            <button type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar