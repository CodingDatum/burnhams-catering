import React from 'react'
import Buttons from '../UI/Buttons/Buttons';
import MainTab from '../UI/MainTab/MainTab';

const EventsPage = props => {

    const closeEventsPage = () => {
        props.closeEventsPage()
    }

    return (
        <MainTab>
            <h2>Testing Staff Page</h2>
            <Buttons onClick={closeEventsPage} buttonText="back" />
        </MainTab>
    )
}

export default EventsPage