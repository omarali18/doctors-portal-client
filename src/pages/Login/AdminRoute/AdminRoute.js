import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth()
    const location = useLocation()
    if (isLoading) {
        return <CircularProgress sx={{ mt: 8 }} color="secondary" />
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }}></Navigate>
};

export default AdminRoute;