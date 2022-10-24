import React from 'react';
import styles from './InputFeild.module.css';

const InputFeild = (props) => {
    const _class_name = props.className;
    return (
        <div className={styles['input-feild']}>
            <label>{props.label}</label>
            <input 
            type={props.inputType} 
            onChange={props.onChangeHandler} 
            onBlur={props.onInputBlur !== undefined ? props.onInputBlur : ''}
            value={`${props.inputValue || ''}`}
            className={`${styles[_class_name] || ''}`}
            />
        </div>
    )
}

export default InputFeild;