import React, {useState,useEffect,useReducer}from 'react';
import styles from './Form.module.css';
import InputFeild from '../../UI/InputFeild/InputFeild';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

const emailReducer = (state,action) => {
    // console.warn("state,action",state,action)
    if(action.type == 'USER_INPUT'){
        return {value:action.payload,isValid:action.payload.includes("@")}

       
    }
    if(action.type == 'INPUT_BLUR'){
        return {value:state.value,isValid:state.value.includes("@")}
    }
    return {value:'',isValid:false}
}
const Login = (props) => {
    // const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [emailIsValid,setEmailIsValid] = useState(true);
    const [passwordIsValid,setPasswordIsValid] = useState(true);
    const [isFormValid,setIsFormValid] = useState(true);

    const [emailState,dispatchEmail] =  useReducer(emailReducer, {
        value:'',
        isValid:false
    });

    // useEffect(()=>{
    //     const identifier = setTimeout(()=>{
    //         setIsFormValid(email.includes("@") && password.trim().length > 5)

    //     },500);

    //     return()=>{
    //         console.log("cleanup func");
    //         clearTimeout(identifier);
    //     }
    // },[email,password]);

    const onEmailChangeHandler = (e)=> {
        // setEmail(e.target.value);
        // console.log(" @@!!! USER_INPUT")
        dispatchEmail({
            type:'USER_INPUT',
            payload:e.target.value
        })

        setIsFormValid(e.target.value.includes("@") && password.trim().length > 5);
    }
    const onPasswordChangeHandler = (e)=> {
        setPassword(e.target.value);

        setIsFormValid(e.target.value.trim().length > 5 && emailState.value.includes("@"))
    }
    const formSubmitHandler = ()=> {
        console.log("email",emailState.value,"password",password)
    }

    const validateEmailHandler = ()=>{
        // setEmailIsValid(emailState.value.includes('@'));
        // console.log("***** INPUT_BLUR")
        dispatchEmail({
            type:'INPUT_BLUR'
        })
    }
    const validatePasswordHandler = ()=>{ 
        setPasswordIsValid(password.trim().length > 5);
    }

    return (
        <Card>
            <form className={`${styles.login}`} onSubmit={formSubmitHandler}>
                <h3 className={styles.formTitle}></h3>
                <InputFeild 
                    className={`${!emailState.isValid ? 'invalid' : ''}`}
                    label="Email"
                    inputType="email"
                    inputValue={emailState.value}
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