/* eslint-disable react/prop-types */
import React from 'react';
import strings from '../locale/strings';

import ScheduleDayComponent from './ScheduleDayComponent';
import '../styles/schedule-component.css';

const ScheduleComponent = ({ schedule }) => {
  return (
    <div className='schedule-component__container' >
      <ScheduleDayComponent day={schedule.monday} name={strings.monday} />
      <ScheduleDayComponent day={schedule.tuesday} name={strings.tuesday} />
      <ScheduleDayComponent day={schedule.wednesday} name={strings.wednesday} />
      <ScheduleDayComponent day={schedule.thursday} name={strings.thursday} />
      <ScheduleDayComponent day={schedule.friday} name={strings.friday} />
      <ScheduleDayComponent day={schedule.saturday} name={strings.saturday} />
      <ScheduleDayComponent day={schedule.sunday} name={strings.sunday} />
    </div>
  );
};

export default ScheduleComponent;