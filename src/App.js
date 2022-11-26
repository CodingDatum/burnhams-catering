import React , { useState } from 'react';
import styles from './App.module.css';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import StaffPage from './components/Staff/StaffPage';
import EventsPage from './components/Events/EventsPage';

const App = props => {

  // have a useState for navbar too! and shall we make it a column or an extension of the navbar that already exists

  const [staffIsOpen, setStaffIsOpen] = useState(false);
  const [eventsIsOpen, setEventsIsOpen] = useState(false);

  // RENDERING (and closing) STAFF PAGE AND EVENT PAGE

  const renderStaffPage = () => {
    setStaffIsOpen(true);
  }

  const closeStaffPage = () => {
    setStaffIsOpen(false)
  }

  const renderEventsPage = () => {
    setEventsIsOpen(true);
  }

  const closeEventsPage = () => {
    setEventsIsOpen(false)
  }

  return (
    <React.Fragment>
      {staffIsOpen && <StaffPage closeStaffPage={closeStaffPage} />}
      {eventsIsOpen && <EventsPage closeEventsPage={closeEventsPage} />}
      <div className={styles.main}>
        <Navbar />
        <Main renderStaffPage={renderStaffPage} renderEventsPage={renderEventsPage} />
      </div>
    </React.Fragment>
  );
}

export default App;
