import styles from './login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { loginUser } from '../../services/login/action';
import { useDispatch } from 'react-redux';
import { FormEvent } from 'react';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { values, handleChange, setValues } = useForm({email: '', password: ''});

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handleIconClick() {
        !isPasswordVisible ? setIsPasswordVisible(true) : isPasswordVisible && setIsPasswordVisible(false);
    };

    function successfulHandler() {
        setValues({email: '', password: ''});
        navigate('/');
    };

    function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(values.email && values.password) {
            dispatch(loginUser(values, successfulHandler) as any);
        }
        return
    };

    return (
        <section className={styles.formSection}>
            <form className={styles.form}
                onSubmit={ handleSubmitForm }
            >
                <h1 className={ styles.title }>Вход</h1>
                <Input 
                    type={'email'}
                    name={'email'}
                    placeholder={'E-mail'}
                    onChange={ handleChange }
                    value={ values.email }
                />
                <Input
                    type={ !isPasswordVisible ? 'password' : 'text'}
                    name={'password'}
                    placeholder={'Пароль'}
                    icon={ !isPasswordVisible ? 'ShowIcon' : 'HideIcon'}
                    onIconClick={ handleIconClick }
                    onChange={ handleChange }
                    value={ values.password }
                />
                <div className={ styles.buttonPlace }>
                    <Button 
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        disabled={ !values.password || !values.email ? true : false }
                    >
                    Войти
                    </Button>    
                </div>
                <div className={ `${styles.linkPlace} mt-20` }>
                    <p className={ styles.text }>Вы — новый пользователь? <Link to='/register' className={ styles.link }>Зарегистрироваться</Link></p>
                    <p className={ styles.text }>Забыли пароль? <Link to='/forgot-password' className={ styles.link }>Восстановить пароль</Link></p>
                </div>
            </form>
        </section>
    )
};

export default Login;