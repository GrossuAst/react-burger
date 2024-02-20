import styles from './profile.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
    const [isFormActive, setIsFormActive] = useState(true);

    const { values, handleChange, setValues } = useForm();

    return(
        <section className={ `${styles.section} pt-30` }>
            <ProfileNavigation />
            <form 
                className={ styles.form }
                disabled={ isFormActive ? true : false }
            >
                <Input 
                    type={'text'}
                    name={'name'}
                    placeholder={'Имя'}
                    value={'Марк'}
                    onChange={ handleChange }
                    icon={'EditIcon'}
                    // disabled={ isFormActive ? true : false }
                />
                <Input 
                    type={'email'}
                    name={'email'}
                    placeholder={'Логин'}
                    value={'Заглушка'}
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
            </form>
        </section>
    )
};

export default Profile;