import { Navigate } from 'react-router-dom'

const AdminRouters = ({ isAdmin, children }) => {
    return isAdmin
        ? children
        : <Navigate to="/" />
}

export default AdminRouters