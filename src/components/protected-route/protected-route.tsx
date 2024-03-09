import React, { ReactNode } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface IProtectedRouteProps {
    onlyUnAuth: boolean;
    component: ReactNode;
};

const ProtectedRoute = ({ onlyUnAuth = false, component }: IProtectedRouteProps) => {
    const location = useLocation();

    const { user, didEmailEnter } = useSelector((store: any) => ({
        user: store.userData.user,
        didEmailEnter: store.forgotPassword.feedSucces
    }), shallowEqual);

    if(!didEmailEnter && !user && onlyUnAuth && location.pathname === '/reset-password') {
        const { from } = location.state || { from: {pathname: '/'} };
        return <Navigate to={ from } />
    };

    if(onlyUnAuth && user) {
        const { from } = location.state || { from: {pathname: '/'} };
        return <Navigate to={ from } />
    };
 
    if(!onlyUnAuth && !user) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    const Component = component as React.ReactElement;

    return Component;
};

export default ProtectedRoute;