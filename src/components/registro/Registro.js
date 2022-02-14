import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { loginGoogle } from '../../redux/actions/loginGoogle'

const Registro = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange] = useForm({
        username: '',
        password: ''
    })

    const { username, password } = values

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    return (
        <form className='formLogin' onSubmit={handleSubmit}>
            <input type='text' placeholder='Nombre de usuario' value={username} onChange={handleInputChange} />
            <input type='password' placeholder='Contraseña' value={password} onChange={handleInputChange} />
            <button className='btnLogin' type='submit'>Iniciar Sesion</button>
            <button className='btnGoogle' onClick={handleGoogle}>
                <img src='https://res.cloudinary.com/ddgyxfetd/image/upload/v1644853771/sprint%203/1024px-Google_2015_logo.svg_zcn3ri.png' alt='google' />
            </button>
        </form>
    )
}

export default Registro