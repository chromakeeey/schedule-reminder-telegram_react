/* eslint-disable react/prop-types */
import React from 'react';
import ScheduleDayManage from '../components/ScheduleDayManage';

import '../styles/schedule-manage.css';

const ScheduleManage = ({ schedule, onEdit }) => {
  return (
    <div className='schedule-manage__container' >
      <ScheduleDayManage day={schedule.monday} name={'Monday'} onEdit={onEdit} />
      <ScheduleDayManage day={schedule.tuesday} name={'Tuesday'} onEdit={onEdit} />
      <ScheduleDayManage day={schedule.wednesday} name={'Wednesday'} onEdit={onEdit} />
      <ScheduleDayManage day={schedule.thursday} name={'Thursday'} onEdit={onEdit} />
      <ScheduleDayManage day={schedule.friday} name={'Friday'} onEdit={onEdit} />
      <ScheduleDayManage day={schedule.saturday} name={'Saturday'} onEdit={onEdit} />
      <ScheduleDayManage day={schedule.sunday} name={'Sunday'} onEdit={onEdit} />
    </div>
  )
};

export default ScheduleManage;