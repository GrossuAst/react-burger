import styles from './forgot-password.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { restorePassword } from '../../utils/auth-api';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { forgotPasswordRequest } from '../../services/actions/forgot-password';
import { useDispatch } from 'react-redux';

function ForgotPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { values, handleChange, setValues } = useForm({email: ''});

    function successfulHandler() {
        setValues({email: ''});
        navigate('/reset-password');
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        if(values.email) {
            dispatch(forgotPasswordRequest(values.email, successfulHandler));
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