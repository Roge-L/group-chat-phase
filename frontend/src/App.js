import './App.css';
import DatePicker from './components/DatePicker';
import Contacts from './layout/Contacts';
import Calendar from './layout/Calendar';

function App() {
  return (
    <div className="app">

      <header className="header">
      </header>

      <sidebar className="sidebar">
      </sidebar>

      <div className="main">
        <div className="main-inner">
          <p className="label">Choose an invitee</p>
          <Contacts></Contacts>
          <p className="label">View Date</p>
          <DatePicker></DatePicker>
          <Calendar></Calendar>
        </div>
      </div>

    </div>
  );
}



export default App;
