import React from 'react';

import Buttons from '../UI/Buttons/Buttons';

import styles from './StaffPage.module.css'

const StaffPage = props => {

    const closeStaffPage = () => {
        props.closeStaffPage()
    }

    return (
        <div className={styles["staff-page"]}>
            <h2>Testing Staff Page</h2>
            <Buttons onClick={closeStaffPage}>back</Buttons>
        </div>
    )
}

export default StaffPage