/* eslint-disable react/prop-types */
import React from 'react';

import { Plus } from 'react-bootstrap-icons';
import ScheduleLessonManage from './ScheduleLessonManage';
import '../styles/schedule-manage.css';

const ScheduleDayManage = ({ day, dayIndex, name, onEdit, onClickAdd }) => {
  return (
    <div className='schedule-manage__day-container' >
      <div className='schedule-manage__day-container-header' >
        {name}
      </div>
      {
        day.length !== 0 &&
        day.map((lesson) => {
          return (
            <div key={lesson.id}>
              <ScheduleLessonManage lesson={lesson} onEdit={onEdit} />
            </div>
          )
        })
      }
      <div className='schedule-manage__button-add' onClick={() => onClickAdd(dayIndex)} >
        <Plus size={24} />
      </div>
    </div>
  )
};

export default ScheduleDayManage;