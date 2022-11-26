import React from 'react'

import styles from './EventsPage.module.css';

const EventsPage = props => {

    const closeEventsPage = () => {
        props.closeEventsPage()
    }

    return (
        <div className={styles["events-page"]}>
            <h2>Testing Staff Page</h2>
            <button onClick={closeEventsPage}>back</button>
        </div>
    )
}

export default EventsPage