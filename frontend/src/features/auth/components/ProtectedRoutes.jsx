import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Loader from './Loader'

const ProtectedRoutes = ({ children }) => {
    const { loading, user } = useAuth()

    if (loading) return <Loader />

    if (!user) return <Navigate to="/login" replace />

    return children
}

export default ProtectedRoutes