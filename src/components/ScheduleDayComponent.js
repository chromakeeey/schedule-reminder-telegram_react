/* eslint-disable react/prop-types */
import React from 'react';
import strings from '../locale/strings';

import ScheduleLessonComponent from '../components/ScheduleLessonComponent';
import '../styles/schedule-component.css';

const ScheduleDayComponent = ({ day, name }) => {
  if (day === undefined) {
    return (
      <></>
    )
  }

  return (
    <div className='day-container' >
      <div className='day-header' >
        {name}
      </div>
      <div className='lessons-container' >
      {
        day.length === 0
        ? (
          <div className='gray-color text-align-center' >
            {strings.empty}
          </div>
        )
        : (
          <div>
            {
              day.map((lesson, index) => {
                return (
                  <div key={index}>
                    <ScheduleLessonComponent lesson={lesson} serial={index + 1} /> 
                  </div>
                )
              })
            }
          </div>
        )
      }
      </div>
    </div>
  );
};

export default ScheduleDayComponent;