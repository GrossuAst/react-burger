import styles from './profile-navigation.module.css';
import { NavLink } from "react-router-dom";

function ProfileNavigation() {
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
                    <NavLink to='/login' end
                        className={ ({isActive}) => isActive ? `text text_type_main-medium ${styles.link} ${styles.linkActive}` :
                        `text text_type_main-medium ${styles.link} ${styles.linkInactive}` }
                    >
                        Выход
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default ProfileNavigation;