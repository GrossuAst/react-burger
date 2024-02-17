import styles from './register.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from '../../hooks/useForm';
import { registerUser } from '../../utils/auth-api';

function Register() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handleIconClick() {
        !isPasswordVisible ? setIsPasswordVisible(true) : isPasswordVisible && setIsPasswordVisible(false);
    };

    const { values, handleChange, setValues } = useForm({name: '', email: '', password: ''});

    function handleSubmitForm(e) {
        e.preventDefault();
        if(values.name && values.email && values.password) {
            registerUser(values)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        return
    };

    return (
        <section className={styles.formSection}>
            <form className={styles.form}
                onSubmit={ handleSubmitForm }
            >
                <h1 className={ styles.title }>Регистрация</h1>
                <Input 
                    type={'text'}
                    name={'name'}
                    placeholder={'Имя'}
                    onChange={ handleChange }
                    value={ values.name }
                />
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
                        disabled={ !values.name || !values.email || !values.password ? true : false }
                    >
                    Зарегистрироваться
                    </Button>    
                </div>

                <p className={ styles.text }>Уже зарегистрированы? <Link to='/login' className={ styles.link }>Войти</Link></p>
            </form>
        </section>
    )
};

export default Register;
