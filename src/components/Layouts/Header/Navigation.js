import React from 'react';
import styles from './Header.module.css';

const Navigation = (props) => {
    return (
        <div className={styles.navbar}>
            <a className={styles.navlink}>favourites</a>
            <a className={styles.navlink}>vegitarian</a>
            <a className={styles.navlink}>local</a>
        </div>
    )
}

export default Navigation;