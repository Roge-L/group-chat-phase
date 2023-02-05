import React, { useEffect } from "react";
import "./App.css";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import PlanCreate from "./components/PlanCreate";
import ScheduleSelect from "./components/ScheduleSelect";
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from "./components/calendar/Calendar";
import { appwriteDatabase } from "./utils/utils";
import Plans from "./components/Plans/Plans";
import Availability from "./components/Availability";

function App() {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    try {
      console.log(user, isAuthenticated);
    } catch {
      console.log("hello");
    }
  }, [user]);

  return (
    <div className="app">
      <header className="header"></header>

      <div className="sidebar">
        {isAuthenticated ? (
          <>
            <LogoutButton />
            <PlanCreate />
          </>
        ) : (
          <LoginButton />
        )}
      </div>

      <div className="main">
        <div className="main-container">
          <Plans></Plans>
          <Availability></Availability>
        </div>
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export default App;
