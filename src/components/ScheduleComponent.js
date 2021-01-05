/* eslint-disable react/prop-types */
import React from 'react';

import ScheduleDayComponent from './ScheduleDayComponent';
import '../styles/schedule-component.css';

const ScheduleComponent = ({ schedule }) => {
  console.log(schedule);

  return (
    <div className='schedule-component__container' >
      <ScheduleDayComponent day={schedule.monday} name={'Monday'} />
      <ScheduleDayComponent day={schedule.tuesday} name={'Tuesday'} />
      <ScheduleDayComponent day={schedule.wednesday} name={'Wednesday'} />
      <ScheduleDayComponent day={schedule.thursday} name={'Thursday'} />
      <ScheduleDayComponent day={schedule.friday} name={'Friday'} />
      <ScheduleDayComponent day={schedule.saturday} name={'Saturday'} />
      <ScheduleDayComponent day={schedule.sunday} name={'Sunday'} />
    </div>
  );
};

export default ScheduleComponent;