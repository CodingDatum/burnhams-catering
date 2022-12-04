import React from 'react';

import styles from './Buttons.module.css';

const Buttons = props => {

    let buttonStyle ="main-button"

    if(props.navColButton){
        buttonStyle="nav-col-button"
    }

    return(
        <button className={styles[buttonStyle]} onClick={props.onClick}>{props.buttonText}</button>
    )
}

export default Buttons