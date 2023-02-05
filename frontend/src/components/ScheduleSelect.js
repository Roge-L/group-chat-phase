import React, { useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import Popup from 'reactjs-popup';
import ScheduleIcon from '@mui/icons-material/Schedule';
import 'reactjs-popup/dist/index.css';
import '../styles/ScheduleSelect.css';
import '../styles/ScheduleSelect.css';

const ScheduleSelect= () => {

    const[schedule, setSchedule] = useState([])

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
        <div className='container'>
        <Popup trigger={<button className='log_button'><ScheduleIcon/></button>} modal="nested">
            {
                close => (
                    <div className='schedule-container'>
                        <div className='header'> 
                            <h1> When are you free? </h1>
                        </div>
                        <div className="selector">
                            <ScheduleSelector
                            selection={schedule}
                            minTime={0}
                            maxTime={24}
                            onChange={onChange}
                            />
                        </div>

                        <button className='form-btn' onClick={Submit}>Submit</button>
                        {/* <div>
                            <button onClick={() => close()}>
                                Close modal
                            </button>
                        </div> */}
                    </div>
                )
            }
        </Popup> 
    </div>
    )
};

export default ScheduleSelect