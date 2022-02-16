import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import App from "../containers/App";

export const Dasboard = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </div>
    )
}