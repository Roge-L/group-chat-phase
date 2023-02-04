import React, { useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';

const ScheduleSelect= () => {

    const[schedule, setSchedule] = useState([])

    const onChange = newSchedule => {
        setSchedule(newSchedule)
    }


    return (
        <ScheduleSelector
        selection={schedule}
        numDays={5}
        minTime={8}
        maxTime={22}
        hourlyChunks={2}
        onChange={onChange}
        />
    )
};

export default ScheduleSelect