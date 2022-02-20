import { getAuth, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { consultaTypeUser } from '../../redux/actions/usuarioActions'

const Perfil = () => {

    const auth = getAuth()
    const dispatch = useDispatch()
    // const { peliculas } = useSelector(store => store.pelicula)
    const { admin } = useSelector(store => store.user)
    console.log(admin);

    const [usuario, setusuario] = useState({
        displayName: "",
        email: "",
        photoURL: ""
    })

    // const [admin, setadmin] = useState(false)

    const { displayName, email, photoURL } = usuario

    useEffect(() => {
        const user = auth.currentUser;
        if (user.photoURL !== null) {
            setusuario({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            })
        } else {
            setusuario({
                displayName: user.displayName,
                email: user.email,
                photoURL: "https://res.cloudinary.com/ddgyxfetd/image/upload/v1645386383/sprint%203/anonimo_bovqde.png"
            })
        }
    }, [auth])

    useEffect(() => {
        dispatch(consultaTypeUser())
    }, [dispatch])

    const cerrarSesion = () => {
        signOut(auth)
    }

    return (
        <div>
            <div className='infoUsuario'>
                <div className='imagenUsuario'>
                    <img src={photoURL} alt="foto perfil" />
                </div>
                <div>
                    <span>{displayName}</span>
                    <span>{email}</span>
                </div>
                <center>
                    <button onClick={() => cerrarSesion()} type="button" className='bntCerrarSesion'>Cerrar Sesion</button>
                </center>
                <center>
                    <button type="button" className='bntAdmin'>Administrar Datos</button>
                </center>
            </div>
        </div>
    )
}

export default Perfil