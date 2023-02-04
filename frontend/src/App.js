import React from 'react';
import './App.css';
import DatePicker from './components/DatePicker';
import DayAvailability from './components/DayAvailability';
import Contacts from './layout/Contacts';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';

function App() {
  return (
    <div className="app">

      <header className="header">
      </header>

      <div className="sidebar">
        <LoginButton />
        {/* <LogoutButton /> */}
      </div>

      <div className="main">
        <div className="main-inner">
          <p className="label">View Invitee</p>
          <Contacts></Contacts>
          <p className="label">Prefered Times</p>
          {/* <DatePicker></DatePicker> */}
          <DayAvailability></DayAvailability>
        </div>
      </div>

    </div>
  );
}



export default App;
