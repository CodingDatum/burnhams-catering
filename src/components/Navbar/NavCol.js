import React from 'react'

import Buttons from '../UI/Buttons/Buttons';

import styles from './NavCol.module.css';

const NavCol = props => {

    const closeNavCol = () => {
        props.closeNavCol()
    }
    return(
        <div className={styles.navcol}>
            <Buttons navColButton={true} buttonText="Fish Bucket" />
            <Buttons navColButton={true} buttonText="Send Business Card" />
            <Buttons navColButton={true} buttonText="This is a Button" />
            <Buttons navColButton={true} buttonText="Buttons are fun" />
            <Buttons navColButton={true} buttonText="Click me you bitch" />
            <span className={styles.close} onClick={closeNavCol}>X</span>
        </div>
    )
}

export default NavCol;