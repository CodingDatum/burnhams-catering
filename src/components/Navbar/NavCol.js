import React from 'react'

import styles from './NavCol.module.css';

const NavCol = props => {

    const closeNavCol = () => {
        props.closeNavCol()
    }
    return(
        <div className={styles.navcol}>
            <span>Trsting</span>
            <span>Trsting</span>
            <span>Trsting</span>
            <span>Trsting</span>
            <span>Trsting</span>
            <span className={styles.close} onClick={closeNavCol}>X</span>
        </div>
    )
}

export default NavCol;