import React from 'react';

import styles from './Navbar.module.css';

const Navbar = props => {

    const renderNavCol = () => {
        props.renderNavCol()
    }

    // This will address the style change needed for hamburger icon to squish when we open navCol

    let burgerStyle

    if(!props.navColIsOpen){
        burgerStyle="hamburger-open";
    }
    if(props.navColIsOpen){
        burgerStyle="hamburger-squish"
    }

    return (
        <div className={styles.navbar}>
            <h1>Burnhams Catering</h1>
            <div className={styles[burgerStyle]} onClick={renderNavCol}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar