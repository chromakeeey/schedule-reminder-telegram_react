/* eslint-disable react/prop-types */
import React from 'react';
import ScheduleDayManage from '../components/ScheduleDayManage';

import '../styles/schedule-manage.css';

const ScheduleManage = ({ schedule, onEdit, onClickAdd, onClickEditLesson }) => {
  return (
    <div className='schedule-manage__container' >
      <ScheduleDayManage day={schedule.monday} dayIndex={1} name={'Monday'} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson} />
      <ScheduleDayManage day={schedule.tuesday} dayIndex={2} name={'Tuesday'} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.wednesday} dayIndex={3} name={'Wednesday'} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.thursday} dayIndex={4} name={'Thursday'} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.friday} dayIndex={5} name={'Friday'} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.saturday} dayIndex={6} name={'Saturday'} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.sunday} dayIndex={0} name={'Sunday'} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
    </div>
  )
};

export default ScheduleManage;