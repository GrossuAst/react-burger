import styles from './forgot-password.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { restorePassword } from '../../utils/auth-api';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassword() {
    const navigate = useNavigate();

    const { values, handleChange, setValues } = useForm({email: ''});

    function handleSubmitForm(e) {
        e.preventDefault();
        if(values.email) {
            restorePassword(values.email)
                .then((res) => {
                    if(res.success) {
                        setValues({});
                        navigate('/reset-password');
                    };
                    return
                })
                .catch((err) => {
                    console.log(err);
                })    
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
                    type={'email'}
                    name={'email'}
                    placeholder={'Укажите e-mail'}
                    onChange={ handleChange }
                    value={ values.email || ''}
                />
                <div className={ styles.buttonPlace }>
                    <Button 
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        disabled={ !values.email ? true : false }
                    >
                        Восстановить
                    </Button>    
                </div>
                <div className={ `${styles.linkPlace} mt-20` }>
                    <p className={ styles.text }>Вспомнили пароль? <Link to='/login' className={ styles.link }>Войти</Link></p>
                </div>
            </form>
        </section>
    )
}

export default ForgotPassword;