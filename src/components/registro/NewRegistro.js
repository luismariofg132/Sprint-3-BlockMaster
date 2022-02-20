import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { RegistroEmailPass } from '../../redux/actions/RegistroUserPass'

const NewRegistro = () => {

    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const [values, handleInputChange] = useForm({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = values

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(RegistroEmailPass(username, email, password))
        Navigate('/login')
    }

    return (
        <form className='formLogin' onSubmit={handleSubmit}>
            <input type='text' placeholder='Nombre' name='username' onChange={handleInputChange} value={username} />
            <input type='email' placeholder='Correo ELectronico' name='email' value={email} onChange={handleInputChange} />
            <input type='password' placeholder='Contraseña' name='password' value={password} onChange={handleInputChange} />
            <button className='btnLogin' type='submit'>Registrarse</button>
            <button className='btnLogin' type='button' onClick={() => {
                Navigate('/login')
            }}>Volver a Login</button>
        </form>
    )
}

export default NewRegistro