import React from 'react';

import styles from './Navbar.module.css';

const Navbar = props => {

    const renderNavCol = () => {
        props.renderNavCol()
    }

    return (
        <div className={styles.navbar}>
            <h1>Burnhams Catering</h1>
            <div className={styles.hamburger} onClick={renderNavCol}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar