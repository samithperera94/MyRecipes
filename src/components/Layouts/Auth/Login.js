import React, {useState,useEffect,useReducer}from 'react';
import styles from './Form.module.css';
import InputFeild from '../../UI/InputFeild/InputFeild';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

const emailReducer = (state,action) => {
    // console.warn("state,action",state,action)
    if(action.type === 'USER_INPUT'){
        return {value:action.payload,isValid:action.payload.includes("@")}

       
    }
    if(action.type === 'INPUT_BLUR'){
        return {value:state.value,isValid:state.value.includes("@")}
    }
    return {value:'',isValid:false}
}
const passwordReducer = (state,action) =>{
    if(action.type === 'USER_INPUT'){
        return {value:action.payload,isValid:action.payload.trim().length > 5}

    }
    if(action.type === 'INPUT_BLUR'){
        return {value:state.value,isValid:state.value.trim().length > 5}

    }
    return {value:'',isValid:false}
}
const Login = (props) => {
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [emailIsValid,setEmailIsValid] = useState(true);
    // const [passwordIsValid,setPasswordIsValid] = useState(true);
    const [isFormValid,setIsFormValid] = useState(true);

    const [emailState,dispatchEmail] =  useReducer(emailReducer, {
        value:'',
        isValid:false
    });

    const [passwordState,dispatchPassword] = useReducer(passwordReducer,{
        value:'',
        isValid:false
    })

    const {isValid : emailIsValid} = emailState;
    const {isValid : passwordIsValid} = passwordState
    useEffect(()=>{
        const identifier = setTimeout(()=>{
            setIsFormValid(emailIsValid && passwordIsValid)

        },500);

        return()=>{
            console.log("cleanup func");
            clearTimeout(identifier);
        }
    },[emailIsValid,passwordIsValid]);

    const onEmailChangeHandler = (e)=> {
        // setEmail(e.target.value);
        // console.log(" @@!!! USER_INPUT")
        dispatchEmail({
            type:'USER_INPUT',
            payload:e.target.value
        })

        // setIsFormValid(e.target.value.includes("@") && passwordState.value.trim().length > 5);
    }
    const onPasswordChangeHandler = (e)=> {
        // setPassword(e.target.value);
        dispatchPassword({payload:e.target.value,type:'USER_INPUT'})

        // setIsFormValid(e.target.value.trim().length > 5 && emailState.value.includes("@"))
    }
    const formSubmitHandler = ()=> {
        console.log("email",emailState.value,"password",passwordState.value)
    }

    const validateEmailHandler = ()=>{
        // setEmailIsValid(emailState.value.includes('@'));
        // console.log("***** INPUT_BLUR")
        dispatchEmail({
            type:'INPUT_BLUR'
        })
    }
    const validatePasswordHandler = ()=>{ 
        // setPasswordIsValid(passwordState.value.trim().length > 5);
        dispatchPassword({type:'INPUT_BLUR'})
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
                    className={`${!passwordState.isValid ? 'invalid' : ''}`}
                    label="Password"
                    inputType="password"
                    inputValue={passwordState.value}
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