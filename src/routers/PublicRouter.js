import { Navigate } from "react-router-dom"

const PublicRouter = ({ isAuthenticated, children }) => {
    return !isAuthenticated
        ? children
        : <Navigate to="/*" />
}

export default PublicRouter