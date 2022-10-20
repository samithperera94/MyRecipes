import React from 'react';
import styles from './Form.module.css';

const InputFeild = (props) => {
    return (
        <div className={styles['input-feild']}>
            <label>{props.label}</label>
            <input 
            type={props.inputType} 
            onChange={props.onChangeHandler} v
            alue={`${props.inputValue} || ''`}/>
        </div>
    )
}

export default InputFeild;