import React from 'react';
import Buttons from '../UI/Buttons/Buttons';

import styles from './Main.module.css'

const Main = props => {

    const staffSectionHandler = () => {
        props.renderStaffPage()
    }

    const eventsSectionHandler = () => {
        props.renderEventsPage()
    }

    return(
        <div className={styles.main}>
            <h2>Main Page</h2>
            <div className={styles["main-bottom-buttons"]}>
                <Buttons onClick={staffSectionHandler} buttonText="staff"/>
                <Buttons onClick={eventsSectionHandler} buttonText="events"/>
            </div>
        </div>
    )
}

export default Main;