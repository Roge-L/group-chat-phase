import React, { useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../styles/ScheduleSelect.css'
import '../styles/Availability.css';

const Availability = () => {

  const[schedule, setSchedule] = useState([]);
  const[settings, setSettings] = useState({
    min_time: 9,
    max_time: 17,
  })
  const { min_time, max_time } = settings;
  const onChange = newSchedule => {
    setSchedule(newSchedule)
  }

  const Submit = () => {
    console.log('clicked');
    console.log(schedule);
  };

  const onSettingChange = e => setSettings({ ...settings, [e.target.name]: e.target.value });

  return (
    <div className='availability-main'>
      <div className='availability-header'>Your Availability</div>
      <div className="availability-selector">
        <ScheduleSelector
          selection={schedule}
          minTime={8}
          maxTime={24}
          numDays={5}
          columnGap={"2px"}
          rowGap={"2px"}
          onChange={onChange}
        />
      </div>

      {/* <button className='form-btn' onClick={Submit}>Submit</button> */}
      {/* <div>
          <button onClick={() => close()}>
              Close modal
          </button>
      </div> */}
    </div>
  )
};

export default Availability;