/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Button from 'react-bootstrap/Button';
import { Pencil, X } from 'react-bootstrap-icons';

import '../styles/schedule-manage.css';

const ScheduleLessonManage = ({ lesson, onEdit }) => {
  const intToStringTime = (number) => {
    return (
      number < 10
      ? `0${number}`
      : `${number}`
    );
  };

  const hourStart = intToStringTime(lesson.hour_start);
  const minuteStart = intToStringTime(lesson.minute_start);

  const hourEnd = intToStringTime(lesson.hour_end);
  const minuteEnd = intToStringTime(lesson.minute_end);

  const stringTime = `${hourStart}:${minuteStart} - ${hourEnd}:${minuteEnd}`;

  return (
    <div className='schedule-manage__lesson' >
      <div className='schedule-manage__lesson-container' >
        <div className='schedule-manage__lesson-header'>Serial number</div>
        <div>{lesson.serial}</div>
      </div>
      <div className='schedule-manage__lesson-container'>
        <div className='schedule-manage__lesson-header'>Subgroup</div>
        <div>
          {
            lesson.subgroup_id === 0
            ? 'All'
            : lesson.subgroup_id
          }
        </div>
      </div>
      <div className='schedule-manage__lesson-container'>
        <div className='schedule-manage__lesson-header' >Name</div>
        <div>{lesson.name}</div>
      </div>
      <div className='schedule-manage__lesson-container'>
        <div className='schedule-manage__lesson-header'>Duration</div>
        <div>{stringTime}</div>
      </div>
      <Button variant='outline-dark' style={{marginRight: 5}} >
        <Pencil size={17} />
      </Button>
      <Button variant='outline-danger' >
        <X size={17} />  
      </Button>
    </div>
  )
};

export default ScheduleLessonManage;