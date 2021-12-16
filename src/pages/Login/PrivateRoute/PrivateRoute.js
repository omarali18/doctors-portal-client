import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    const location = useLocation()
    if (isLoading) {
        return <CircularProgress sx={{ mt: 8 }} color="secondary" />
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default PrivateRoute;