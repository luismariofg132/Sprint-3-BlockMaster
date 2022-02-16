import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewRegistro from '../components/registro/NewRegistro'
import Registro from '../components/registro/Registro'
import { Dasboard } from './Dashboard'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const AppRouters = () => {

    const [checking, setchecking] = useState(true)
    const [isLogin, setisLogin] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                // console.log(user)
                setisLogin(true)
            }
            else {
                setisLogin(false)
            }
            setchecking(false)
        })
    }, [setisLogin, setchecking])


    if (checking) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/login' element={<PublicRouter isAuthenticated={isLogin}>
                        <Registro />
                    </PublicRouter>} />
                    <Route path='/registro' element={<PublicRouter isAuthenticated={isLogin}>
                        <NewRegistro />
                    </PublicRouter>} />
                    <Route path='/*' element={<PrivateRouter isAuthenticated={isLogin}>
                        <Dasboard />
                    </PrivateRouter>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouters