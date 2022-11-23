import React , { useState } from 'react';
import styles from './App.module.css';
import Main from './components/Main';

import Navbar from './components/Navbar';
import StaffPage from './components/StaffPage';

const App = props => {

  // have a useState for navbar too! and shall we make it a column or an extension of the navbar that already exists

  const [staffIsOpen, setStaffIsOpen] = useState(false);
  const [eventsIsOpen, setEventsIsOpen] = useState(false);

  const renderStaffPage = () => {
    setStaffIsOpen(true);
  }

  const closeStaffPage = () => {
    setStaffIsOpen(false)
  }

  return (
    <React.Fragment>
      {staffIsOpen && <StaffPage closeStaffPage={closeStaffPage} />}
      <div className={styles.main}>
        <Navbar />
        <Main renderStaffPage={renderStaffPage} />
      </div>
    </React.Fragment>
  );
}

export default App;
