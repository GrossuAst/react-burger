import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylesAppHeader from './app-header.module.css';

function AppHeader() {
    return (
        <header className={ `pt-4 pb-4 ${stylesAppHeader.header}` } >
            <div className={ stylesAppHeader.wrapper }>
                <nav className={ stylesAppHeader.navigate }>
                    <ul className={ stylesAppHeader.list }>
                        <li className={ stylesAppHeader.navItem }>
                            <a href=' ' className={`pt-4 pb-4 pr-5 pl-5 ${stylesAppHeader.link}`}>
                                <BurgerIcon type="primary" />
                                <p className='text text_type_main-default ml-2'>Конструктор</p>
                            </a>
                        </li>
                        <li className={ stylesAppHeader.navItem }>
                            <a href=' ' className={`pt-4 pb-4 pr-5 pl-5 ${stylesAppHeader.link}`}>
                                <ListIcon type="secondary" />
                                <p className='text text_type_main-default text_color_inactive ml-2'>Лента новостей</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href=' ' className={ stylesAppHeader.logo }>
                    <Logo />
                </a>
                <nav className={ stylesAppHeader.navigate }>
                    <a href=' ' className={`pt-4 pb-4 pr-5 pl-5 pl-5 ${stylesAppHeader.link}`}>
                        <ProfileIcon type="secondary" />
                        <p className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</p>
                    </a>
                </nav>
            </div>
        </header>
    )
};

export default AppHeader;
