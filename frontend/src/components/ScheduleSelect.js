import React, { useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../styles/ScheduleSelect.css'

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
        <div>
        <Popup trigger={<button>Select Avaliablities</button>} modal="nested">
            {
                close => (
                    <div>
                        {/* <div className='settings'> */}
                            


                        {/* <div className='form-group'>  
                            <label>End Time</label>                          
                            <input 
                                className='form-control'
                                type='number'
                                placeholder='End time'
                                min='0'
                                max='24'
                                name='max_time'
                                value={max_time}
                                onChange={e => onSettingChange(e)}
                            />
                        </div> */}

                        {/* </div> */}
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

                        <button className='btn btn-primary' onClick={Submit}>Submit</button>
                        <div>
                            <button onClick={() => close()}>
                                Close modal
                            </button>
                        </div>
                    </div>
                )
            }
        </Popup> 
    </div>
    )
};

export default ScheduleSelect