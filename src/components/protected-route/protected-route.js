import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ onlyUnAuth = false, component }) {
    const location = useLocation();

    const { isAuthChecked, user } = useSelector(store => ({
        isAuthChecked: store.userData.isAuthChecked,
        user: store.userData.user
    }));

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