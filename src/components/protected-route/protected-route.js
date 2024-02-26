import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ onlyUnAuth = false, component }) {
    const location = useLocation();

    const { user, didEmailEnter } = useSelector(store => ({
        user: store.userData.user,
        didEmailEnter: store.forgotPassword.feedSucces
    }));

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

    return component;
};

export default ProtectedRoute;