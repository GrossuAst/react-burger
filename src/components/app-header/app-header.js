import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, Link } from "react-router-dom";
import stylesAppHeader from './app-header.module.css';

function AppHeader() {
    return (
        <header className={ `pt-4 pb-4 ${stylesAppHeader.header}` } >
            <div className={ stylesAppHeader.wrapper }>
                <nav className={ stylesAppHeader.navigate }>
                    <ul className={ stylesAppHeader.list }>
                        <li className={ stylesAppHeader.navItem }>

                            <NavLink to='/' 
                                className={`pt-4 pb-4 pr-5 pl-5 ${stylesAppHeader.link }`}
                            >
                                {({isActive}) => (
                                    <>
                                        <BurgerIcon type={ isActive ? 'primary' : 'secondary' } />
                                        <p className={ `${isActive ? '' : 'text_color_inactive'} text text_type_main-default ml-2` }>Конструктор</p>
                                    </>
                                )}
                            </NavLink> 

                        </li>
                        <li className={ stylesAppHeader.navItem }>

                            <NavLink to='/news'
                                className={`pt-4 pb-4 pr-5 pl-5 ${stylesAppHeader.link}`}
                            >
                                {({isActive}) => (
                                    <>
                                        <ListIcon type={ isActive ? 'primary' : 'secondary' } />
                                        <p className={ `${isActive ? '' : 'text_color_inactive'} text text_type_main-default ml-2` }>Лента новостей</p>
                                    </>
                                )}
                            </NavLink>

                        </li>
                    </ul>
                </nav>

                <Link to='/' className={ stylesAppHeader.logo }>
                    <Logo />
                </Link>

                <nav className={ stylesAppHeader.navigate }>

                    <NavLink to='/profile' 
                        className={`pt-4 pb-4 pr-5 pl-5 pl-5 ${stylesAppHeader.link}`}
                    >
                        {({isActive}) => (
                            <>
                                <ProfileIcon type={ isActive ? 'primary' : 'secondary' } />
                                <p className={ `${isActive ? '' : 'text_color_inactive'} text text_type_main-default ml-2` }>Личный кабинет</p>
                            </>
                        )}
                    </NavLink>

                </nav>
            </div>
        </header>
    )
};

export default AppHeader;
