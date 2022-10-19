import React from 'react';
import styles from './Header.module.css';
import logo from '../../../logo.svg';
import Navigation from './Navigation';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            <Navigation />
        </div>
    )
}


export default Header