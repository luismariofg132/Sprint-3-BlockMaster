import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Registro from '../components/registro/Registro'
import App from '../containers/App'

const AppRouters = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/login' element={<Registro />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouters