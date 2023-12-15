import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon , Button, } from "@ya.praktikum/react-developer-burger-ui-components";

import stylesAppHeader from './app-header.module.css';

function AppHeader() {
    return (
        <header className={ stylesAppHeader.header }>
                <nav className={ stylesAppHeader.wrapper }>
                    <ul className={ stylesAppHeader.list }>
                        <li className={ stylesAppHeader.listItem }>
                            <a className={ stylesAppHeader.link }>
                                <BurgerIcon type="primary" />
                                <p className="text text_type_main-default">
                                    Конструктор
                                </p>
                            </a>
                        </li>
                        <li className={ stylesAppHeader.listItem }>
                            <a className={ stylesAppHeader.link }>
                                <ListIcon type="secondary" />
                                <p className="text text_type_main-default text_color_inactive">
                                    Лента новостей
                                </p>
                            </a>
                        </li>
                        <li className={ stylesAppHeader.listItem }>
                            <a className={ stylesAppHeader.link }>
                                <Logo />    
                            </a>    
                        </li>
                        <li className={ stylesAppHeader.listItem }>
                            <a className={ stylesAppHeader.link }>
                                <ProfileIcon type="secondary" />
                                <p className="text text_type_main-default text_color_inactive">
                                    Личный кабинет
                                </p>
                            </a>    
                        </li>
                    </ul>    
                </nav>
        </header>
    )
};

export default AppHeader;
