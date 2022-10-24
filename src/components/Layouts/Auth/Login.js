import React, {useState,useEffect}from 'react';
import styles from './Form.module.css';
import InputFeild from '../../UI/InputFeild/InputFeild';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

const Login = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailIsValid,setEmailIsValid] = useState(true);
    const [passwordIsValid,setPasswordIsValid] = useState(true);
    const [isFormValid,setIsFormValid] = useState(true);

    useEffect(()=>{
        const identifier = setTimeout(()=>{
            setIsFormValid(email.includes("@") && password.trim().length > 5)

        },500);

        return()=>{
            console.log("cleanup func");
            clearTimeout(identifier);
        }
    },[email,password]);

    const onEmailChangeHandler = (e)=> {
        setEmail(e.target.value);

        setIsFormValid(e.target.value.includes("@") && password.trim().length > 5);
    }
    const onPasswordChangeHandler = (e)=> {
        setPassword(e.target.value);

        setIsFormValid(e.target.value.trim().length > 5 && email.includes("@"))
    }
    const formSubmitHandler = ()=> {
        console.log("email",email,"password",password)
    }

    const validateEmailHandler = ()=>{
        setEmailIsValid(email.includes('@'));
    }
    const validatePasswordHandler = ()=>{ 
        setPasswordIsValid(password.trim().length > 5);
    }

    return (
        <Card>
            <form className={`${styles.login}`} onSubmit={formSubmitHandler}>
                <h3 className={styles.formTitle}></h3>
                <InputFeild 
                    className={`${!emailIsValid ? 'invalid' : ''}`}
                    label="Email"
                    inputType="email"
                    inputValue={email}
                    onChangeHandler={onEmailChangeHandler}
                    onInputBlur={validateEmailHandler}
                />
                <InputFeild 
                    className={`${!passwordIsValid ? 'invalid' : ''}`}
                    label="Password"
                    inputType="password"
                    inputValue={password}
                    onChangeHandler={onPasswordChangeHandler}
                    onInputBlur={validatePasswordHandler}
                />
                <Button 
                    type="submit"
                    label="Sign In"
                    className={`${!isFormValid ? 'disabled' : ''}`}
                />
                <div className={styles.formFooter}>
                    Don't have an account? <a>Sign up</a>    
                </div>
            </form>
        </Card>

    )
}

export default Login;