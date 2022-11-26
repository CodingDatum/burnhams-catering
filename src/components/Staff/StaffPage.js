import React from 'react';

import Buttons from '../UI/Buttons/Buttons';
import MainTab from '../UI/MainTab/MainTab';

const StaffPage = props => {

    const closeStaffPage = () => {
        props.closeStaffPage()
    }

    return (
        <MainTab>
            <h2>Testing Staff Page</h2>
            <Buttons onClick={closeStaffPage} buttonText="back" />
        </MainTab>
    )
}

export default StaffPage