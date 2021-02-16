/* eslint-disable react/prop-types */
import React from 'react';
import ScheduleDayManage from '../components/ScheduleDayManage';
import strings from '../locale/strings';

import '../styles/schedule-manage.css';

const ScheduleManage = ({ schedule, onEdit, onClickAdd, onClickEditLesson }) => {
  return (
    <div className='schedule-manage__container' >
      <ScheduleDayManage day={schedule.monday} dayIndex={1} name={strings.monday} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson} />
      <ScheduleDayManage day={schedule.tuesday} dayIndex={2} name={strings.tuesday} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.wednesday} dayIndex={3} name={strings.wednesday} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.thursday} dayIndex={4} name={strings.thursday} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.friday} dayIndex={5} name={strings.friday} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.saturday} dayIndex={6} name={strings.saturday} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
      <ScheduleDayManage day={schedule.sunday} dayIndex={0} name={strings.sunday} onEdit={onEdit} onClickAdd={onClickAdd} onClickEditLesson={onClickEditLesson}/>
    </div>
  )
};

export default ScheduleManage;