import React from 'react';

import styles from './MainTab.module.css'

const MainTab = props => {
    return(
        <div className={styles["main-tab"]}>
            {props.children}
        </div>
    )
}

export default MainTab;