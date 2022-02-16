import { Navigate } from "react-router-dom"

const PrivateRouter = ({ isAuthenticated, children }) => {
    return isAuthenticated
        ? children
        : <Navigate to="/login" />
}

export default PrivateRouter