import styles from './login.module.css';

import { Link } from 'react-router-dom';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function Login() {
    return (
        <section className={styles.formSection}>
            <form className={styles.form}>
                <h1 className={ styles.title }>Регистрация</h1>
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