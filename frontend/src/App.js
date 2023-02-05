import React, { useEffect } from "react";
import "./App.css";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import PlanCreate from "./components/PlanCreate";
import ScheduleSelect from "./components/ScheduleSelect";
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from "./components/calendar/Calendar";
import { appwriteDatabase } from "./utils/utils";

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
            <ScheduleSelect />
          </>
        ) : (
          <LoginButton />
        )}
      </div>

      <div className="main">
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export default App;
