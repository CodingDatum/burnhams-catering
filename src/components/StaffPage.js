import React from 'react';

import styles from './StaffPage.module.css'

const StaffPage = props => {

    const closeStaffPage = () => {
        props.closeStaffPage()
    }

    return (
        <div className={styles["staff-page"]}>
            <h2>Testing Staff Page</h2>
            <button onClick={closeStaffPage}>back</button>
        </div>
    )
}

export default StaffPage