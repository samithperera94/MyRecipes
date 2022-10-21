import React from 'react';
import styles from './InputFeild.module.css';

const InputFeild = (props) => {
    return (
        <div className={styles['input-feild']}>
            <label>{props.label}</label>
            <input 
            type={props.inputType} 
            onChange={props.onChangeHandler} 
            className={`${props.inputValue || ''}`}/>
        </div>
    )
}

export default InputFeild;