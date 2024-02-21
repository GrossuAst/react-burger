import styles from './profile-navigation.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from '../../utils/auth-api';

function ProfileNavigation() {
    const navigate = useNavigate();

    function handleLogut() {
        logout()
            .then((res) =>{
                if(res && res.success) {
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }
            })
            .catch((err) => {
                
            })
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
                    <NavLink to='/profile/orders' end
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