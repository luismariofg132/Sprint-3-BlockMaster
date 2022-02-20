import { getAuth, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

const Perfil = () => {

    const auth = getAuth()

    const [usuario, setusuario] = useState({
        displayName: "",
        email: "",
        photoURL: ""
    })

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

    console.log(usuario);

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
            </div>
        </div>
    )
}

export default Perfil