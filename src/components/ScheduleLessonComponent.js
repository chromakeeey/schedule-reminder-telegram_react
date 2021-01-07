/* eslint-disable react/prop-types */
import React from 'react'

import strings from '../locale/strings';
import '../styles/day-component.css';

const ScheduleLessonComponent = ({ lesson, serial }) => {
  const intToStringTime = (number) => {
    return (
      number < 10
      ? `0${number}`
      : `${number}`
    );
  };

  if (!lesson) {
    return (
      <div className='lesson-container__serial' >
        <div className='serial-container' >{serial}</div>
        <div className='no-lesson-container' >{strings.noLesson}</div>
      </div>
    );
  }

  const hourStart = intToStringTime(lesson[0].hour_start);
  const minuteStart = intToStringTime(lesson[0].minute_start);

  const hourEnd = intToStringTime(lesson[0].hour_end);
  const minuteEnd = intToStringTime(lesson[0].minute_end);

  const stringTime = `${hourStart}:${minuteStart} - ${hourEnd}:${minuteEnd}`;

  return (
    <div className='lesson-container__serial' >
      <div className='serial-container' >{serial}</div>
      {
        lesson.map((subject) => {
          return (
            <div key={subject.id} className='name-container' >
              <span>{subject.name}</span>
              {
                subject.subgroup_id !== 0 &&
                <div className='serial-duration' >
                  {subject.subgroup_id} {strings.subgroup}
                </div>
              }
            </div>
          )
        })
      }
      <div className='serial-duration margin-top-20' >
        {strings.duration}
      </div>
      <div className='serial-time-string' >
          {stringTime}
      </div>
    </div>
  );
};

export default ScheduleLessonComponent;