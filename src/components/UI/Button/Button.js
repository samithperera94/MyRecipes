import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const onClickHandler = () => {
        if (props.onClick != undefined) {
            props.onClick();
        }
    }
    return (
        <button
            onClick={onClickHandler}
            type={`${props.type} || button`}
            className={`${styles.button} ${props.className}`}
        >
            {props.label}
        </button>
    )
}

export default Button;