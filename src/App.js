import React , { useState } from 'react';
import styles from './App.module.css';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import StaffPage from './components/Staff/StaffPage';
import EventsPage from './components/Events/EventsPage';
import NavCol from './components/Navbar/NavCol';

const App = props => {

// -----THESE ARE THE 3 MAIN PAGES/EXTENSIONS FOR THE MAIN SITE-----

  const [staffIsOpen, setStaffIsOpen] = useState(false);
  const [eventsIsOpen, setEventsIsOpen] = useState(false);
  const [navColIsOpen, setNavColIsOpen] = useState(false);

  // RENDERING (and closing) STAFF PAGE AND EVENT PAGE AND NAVCOL

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


  const renderNavCol = () => {
    setNavColIsOpen(true)
  }

  const closeNavCol = () => {
    setNavColIsOpen(false)
  }

  return (
    <React.Fragment>
      {staffIsOpen && <StaffPage closeStaffPage={closeStaffPage} />}
      {eventsIsOpen && <EventsPage closeEventsPage={closeEventsPage} />}
      {navColIsOpen && <NavCol closeNavCol={closeNavCol} />}
      <div className={styles.main}>
        <Navbar renderNavCol={renderNavCol} navColIsOpen={navColIsOpen} />
        <Main renderStaffPage={renderStaffPage} renderEventsPage={renderEventsPage} />
      </div>
    </React.Fragment>
  );
}

export default App;
