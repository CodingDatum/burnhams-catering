import React from 'react';

import styles from './Buttons.module.css';

const Buttons = props => {

    // Think of a name for a variable attending to the different button styles
    // Also... should this be a useState situation? or static?

    return(
        <button className={styles["main-button"]} onClick={props.onClick}>{props.buttonText}</button>
    )
}

export default Buttons