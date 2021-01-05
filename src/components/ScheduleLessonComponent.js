/* eslint-disable react/prop-types */
import React from 'react'

const ScheduleLessonComponent = ({ lesson }) => {
  console.log(lesson);

  if (!lesson) {
    return (
      <div>
        nothing
      </div>
    );
  }

  return (
    <div>
      {
        lesson.map((subject) => {
          return (
            <div key={subject.id} >
              <span>{subject.serial}</span>
              <span>{subject.name}</span>
            </div>
          )
        })
      }
    </div>
  );
};

export default ScheduleLessonComponent;