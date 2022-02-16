import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { loginGoogle } from '../../redux/actions/loginGoogle'
import { LoginUserPass } from '../../redux/actions/loginSincrono'

const Registro = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(LoginUserPass(email, password))
    }

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    return (
        <form className='formLogin' onSubmit={handleSubmit}>
            <input type='email' placeholder='Correo' name='email' value={email} onChange={handleInputChange} />
            <input type='password' placeholder='Contraseña' name='password' value={password} onChange={handleInputChange} />
            <button className='btnLogin' type='submit'>Iniciar Sesion</button>
            <button className='btnGoogle' onClick={handleGoogle}>
                <img src='https://res.cloudinary.com/ddgyxfetd/image/upload/v1644853771/sprint%203/1024px-Google_2015_logo.svg_zcn3ri.png' alt='google' />
            </button>
            <span>O si prefieres<Link to="/registro">Registrarse</Link></span>
        </form>
    )
}

export default Registro