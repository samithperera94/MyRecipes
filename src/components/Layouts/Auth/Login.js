import React, {useState}from 'react';
import styles from './Form.module.css';
import InputFeild from '../../UI/InputFeild/InputFeild';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

const Login = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onEmailChangeHandler = (e)=> {
        setEmail(e.tartget.value)
    }
    const onPasswordChangeHandler = (e)=> {
        setPassword(e.tartget.value)
    }
    const formSubmitHandler = ()=> {
        console.log("email",email,"password",password)
    }
    return (
        <Card>
            <form className={styles.login} onSubmit={formSubmitHandler}>
                <h3 className={styles.formTitle}></h3>
                <InputFeild 
                    label="Email"
                    inputType="email"
                    inputValue={email}
                    onChangeHandler={onEmailChangeHandler}
                />
                <InputFeild 
                    label="Password"
                    inputType="password"
                    inputValue={password}
                    onChangeHandler={onPasswordChangeHandler}
                />
                <Button 
                    type="submit"
                    label="Sign In"
                />
                <div className={styles.formFooter}>
                    Don't have an account? <a>Sign up</a>    
                </div>
            </form>
        </Card>

    )
}

export default Login;