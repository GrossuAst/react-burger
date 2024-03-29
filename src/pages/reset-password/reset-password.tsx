import styles from './reset-password.module.css';
import { resetPassword } from '../../utils/auth-api';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { handleResetPassword } from '../../services/reset-password/action';
import { useDispatch } from 'react-redux';
import { FormEvent } from 'react';

function ResetPassword() {
    const dispatch = useDispatch();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handleIconClick() {
        !isPasswordVisible ? setIsPasswordVisible(true) : isPasswordVisible && setIsPasswordVisible(false);
    };

    const navigate = useNavigate();

    const { values, handleChange, setValues } = useForm({password: '', code: ''});

    function successfulHanler() {
        setValues({password: '', code: ''});
        navigate('/login');
    }

    function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(values.password && values.code) {
            dispatch(handleResetPassword(values, successfulHanler) as any);
        }
        return
    };

    return (
        <section className={styles.formSection}
            onSubmit={ handleSubmitForm }
        >
            <form className={styles.form}>
                <h1 className={ styles.title }>Восстановление пароля</h1>
                <Input 
                    type={ !isPasswordVisible ? 'password' : 'text'}
                    name={'password'}
                    placeholder={'Введите новый пароль'}
                    icon={ !isPasswordVisible ? 'ShowIcon' : 'HideIcon'}
                    onIconClick={ handleIconClick }
                    onChange={ handleChange }
                    value={ values.password || ''}
                />
                <Input 
                    type={'text'}
                    name={'code'}
                    placeholder={'Введите код из письма'}
                    onChange={ handleChange }
                    value={ values.code || '' }
                />
                <div className={ styles.buttonPlace }>
                    <Button 
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        disabled={ !values.password || !values.code ? true : false }
                    >
                        Сохранить
                    </Button>    
                </div>
                <div className={ `${styles.linkPlace} mt-20` }>
                    <p className={ styles.text }>Вспомнили пароль? <Link to='/login' className={ styles.link }>Войти</Link></p>
                </div>
            </form>
        </section>
    )
}

export default ResetPassword;