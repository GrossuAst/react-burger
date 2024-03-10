import styles from './profile-navigation.module.css';
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { userLogout } from '../../services/logout/action';
import { useDispatch } from 'react-redux';

function ProfileNavigation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function successfulHandler() {
        navigate('/login');
    };

    function handleLogut() {
        dispatch(userLogout(successfulHandler) as any);
    };

    return (
        <nav className={ styles.nav }>
            <ul className={ `${styles.list} pl-5` }>
                <li>
                    <NavLink to='/profile' end
                        className={ ({isActive}) => isActive ? `text text_type_main-medium ${styles.link} ${styles.linkActive}` :
                        `text text_type_main-medium ${styles.link} ${styles.linkInactive}` }
                    >
                        Профиль
                    </NavLink>
                </li>
                <li>
                    <NavLink to='orders' end
                        className={ ({isActive}) => isActive ? `text text_type_main-medium ${styles.link} ${styles.linkActive}` :
                        `text text_type_main-medium ${styles.link} ${styles.linkInactive}` }
                    >
                        История заказов
                    </NavLink>
                </li>
                <li>
                    <button
                        className={ `text text_type_main-medium ${styles.link} ${styles.linkInactive} ${styles.logoutButton}` }
                        onClick={ handleLogut }
                    >
                        Выход
                    </button>
                </li>
            </ul>
        </nav>
    )
};

export default ProfileNavigation;