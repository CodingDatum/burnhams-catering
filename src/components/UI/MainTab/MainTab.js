import React from 'react';

import styles from './MainTab.module.css'

const MainTab = props => {

    let mainTabStyle

    if(!props.styleType){
        mainTabStyle="main-tab"
    }
    if(props.styleType==="staff"){
        mainTabStyle="staff-tab"
    }
    if(props.styleType==="events"){
        mainTabStyle="events-tab"
    }

    return(
        <div className={styles[mainTabStyle]}>
            {props.children}
        </div>
    )
}

export default MainTab;