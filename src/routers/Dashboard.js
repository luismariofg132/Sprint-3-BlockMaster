import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Crud from "../components/control/Crud";
import Navbar from "../components/navbar/Navbar";
import Perfil from "../components/perfil/Perfil";
import App from "../containers/App";
import { consultaTypeUser } from "../redux/actions/usuarioActions";
import AdminRouters from "./AdminRouters";

export const Dasboard = () => {

    const dispatch = useDispatch()
    const { admin } = useSelector(store => store.user)
    useEffect(() => {
        dispatch(consultaTypeUser())
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='*' element={<Navigate to='/' />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path='/controlDatos' element={<AdminRouters isAdmin={admin}>
                    <Crud />
                </AdminRouters>} />
            </Routes>
        </div>
    )
}