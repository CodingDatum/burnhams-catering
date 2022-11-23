import React from 'react';

import styles from './Main.module.css'

const Main = props => {

    const staffSectionHandler = () => {
        props.renderStaffPage()
    }

    return(
        <div className={styles.main}>
            <h2>Main Page</h2>
            <div className={styles["main-bottom-buttons"]}>
                <button onClick={staffSectionHandler}>Staff</button>
                <button>Events</button>
            </div>
        </div>
    )
}

export default Main;