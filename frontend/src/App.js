import React from 'react';
import './App.css';
import DatePicker from './components/DatePicker';
import DayAvailability from './components/DayAvailability';
import Contacts from './layout/Contacts';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import PlanCreate from './components/PlanCreate';
import ScheduleSelect from './components/ScheduleSelect';
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from './components/calendar/Calendar';

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="app">

      <header className="header">
      </header>

      <div className="sidebar">
        {isAuthenticated ? (
        <>
          <LogoutButton />
          <PlanCreate />
          <ScheduleSelect />
        </>
        ) :
        (<LoginButton />)
        }
      </div>

      <div className="main">
        <div className="main-inner">
          <p className="label">View Invitee</p>
          <Contacts></Contacts>
          <p className="label">Preferred Times</p>
          {/* <DatePicker></DatePicker> */}
          <DayAvailability></DayAvailability>
          <Calendar></Calendar>
        </div>
      </div>

    </div>
  );
}



export default App;
