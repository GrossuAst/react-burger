import styles from './profile.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

function Profile() {
    const location = useLocation();
    const isProfilePage = location.pathname === '/profile';
    const isOrdersPage = location.pathname === '/profile/orders';

    const { user } = useSelector(store => ({
        user: store.userData.user
    }));

    const [isFormActive, setIsFormActive] = useState(true);

    const { values, handleChange, setValues } = useForm();

    return(
        <section className={ `${styles.section} pt-30` }>
            <ProfileNavigation />
            {   isProfilePage ?
                (<form 
                    className={ styles.form }
                    disabled={ isFormActive ? true : false }
                >
                    <Input 
                        type={'text'}
                        name={'name'}
                        placeholder={'Имя'}
                        value={ user ? user.name : 'Загрузка данных' }
                        onChange={ handleChange } 
                        icon={'EditIcon'}
                        // disabled={ isFormActive ? true : false }
                    />
                    <Input 
                        type={'email'}
                        name={'email'}
                        placeholder={'Логин'}
                        value={ user ? user.name : 'Загрузка данных' }
                        onChange={ handleChange }
                        icon={'EditIcon'}
                        // disabled={ isFormActive ? true : false }
                    />
                    <Input 
                        type={'password'}
                        name={'password'}
                        placeholder={'Пароль'}
                        value={'Заглушка'}
                        onChange={ handleChange }
                        icon={'EditIcon'}
                        // disabled={ isFormActive ? true : false }
                    />
                </form>) 
                : isOrdersPage &&
                <Outlet/>
            }
        </section>
    )
};

export default Profile;