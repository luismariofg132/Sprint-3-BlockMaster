import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Perfil from "../components/perfil/Perfil";
import App from "../containers/App";

export const Dasboard = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='*' element={<Navigate to='/' />} />
                <Route path="/perfil" element={<Perfil />} />
            </Routes>
        </div>
    )
}