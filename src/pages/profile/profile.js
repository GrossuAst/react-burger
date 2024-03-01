import styles from './profile.module.css';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation';
import { useForm } from '../../hooks/useForm';
import { useState, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { updateUser } from '../../services/edit-profile/action';

function Profile() {
    const dispatch = useDispatch();

    const location = useLocation();
    const isProfilePage = location.pathname === '/profile';
    const isOrdersPage = location.pathname === '/profile/orders';

    const { user } = useSelector(store => ({
        user: store.userData.user
    }), shallowEqual);

    const [isNameInputActive, setNameInputActive] = useState(false);
    const [isEmailInputActive, setEmailInputActive] = useState(false);
    const [isPassInputActive, setPassInputActive] = useState(false);

    const { values, handleChange, setValues } = useForm({ name: user.name, email: user.email, password: 'qwerty' });

    const valuesToSend = () => {
        const data = {};
        (values.name !== user.name) && (data.name = values.name);
        (values.email !== user.email) && (data.email = values.email);
        (values.password !== 'qwerty') && (data.password = values.password);
        return data;
    };

    function handleEditForm(formName) {
        formName === 'name' && setNameInputActive(true);
        formName === 'email' && setEmailInputActive(true);
        formName === 'password' && setPassInputActive(true);
    };

    function handleCancellationButtonClick() {
        setNameInputActive(false);
        setEmailInputActive(false);
        setValues({ name: user.name, email: user.email })
    };

    function checkDisabled() {
        return user.email === values.email && user.name === values.name && values.password === 'qwerty' ? true : false
    };

    function handleSuccessful() {
        setNameInputActive(false)
        setEmailInputActive(false)
        setPassInputActive(false);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        dispatch(updateUser(valuesToSend(), handleSuccessful));
    };

    return(
        <section className={ `${styles.section} pt-30` }>
            <ProfileNavigation />
            {   isProfilePage ?
                (<form className={ styles.form }
                    onSubmit={ handleSubmitForm }
                >
                    <Input 
                        type={'text'}
                        name={'name'}
                        placeholder={'Имя'}
                        value={ user && !isNameInputActive ? user.name : values.name }
                        onChange={ handleChange }
                        icon={'EditIcon'}
                        onIconClick={ () => handleEditForm('name') }
                        disabled={ !isNameInputActive ? true : false }
                    />
                    <Input 
                        type={'email'}
                        name={'email'}
                        placeholder={'Логин'}
                        value={ user && !isEmailInputActive ? user.email : values.email }
                        icon={'EditIcon'}
                        onChange={ handleChange }
                        onIconClick={ () => handleEditForm('email') }
                        disabled={ !isEmailInputActive ? true : false }
                    />
                    <Input 
                        type={'password'}
                        name={'password'}
                        icon={'EditIcon'}
                        placeholder={'Пароль'}
                        value={ isPassInputActive ? values.password : 'qwerty' }
                        onChange={ handleChange }
                        onIconClick={ () => handleEditForm('password') }
                        disabled={ !isPassInputActive ? true : false }
                    />
                    { (isNameInputActive || isEmailInputActive || isPassInputActive) && (
                        <div className={ styles.buttonsPlace }>
                            <Button
                                htmlType={ 'button' }
                                onClick={ handleCancellationButtonClick }
                            >
                                Отмена
                            </Button >
                            <Button
                                htmlType={ 'submit' }
                                onSubmit={ handleSubmitForm }
                                disabled={ checkDisabled() }
                            >
                                Сохранить
                            </Button >  
                        </div>
                    ) }
                </form>) 
                : isOrdersPage &&
                <Outlet/>
            }
        </section>
    )
};

export default Profile;