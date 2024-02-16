import styles from './register.module.css';

import { Link } from 'react-router-dom';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function Register() {
    return (
        <section className={styles.formSection}>
            <form className={styles.form}>
                <h1 className={ styles.title }>Регистрация</h1>
                <Input 
                    type={'text'}
                    placeholder={'Имя'}
                />
                <Input 
                    type={'email'}
                    placeholder={'E-mail'}
                />
                <Input
                    type={'password'}
                    placeholder={'Пароль'}
                    icon={'ShowIcon'}
                />
                <div className={ styles.buttonPlace }>
                    <Button 
                        htmlType="submit"
                        type="primary"
                        size="medium"
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
