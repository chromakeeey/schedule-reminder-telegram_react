/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/lesson.css';

const Lesson = ({ lesson }) => {

  return (
    <div className='lesson-container' >
      {lesson.name}
    </div>
  )
};

export default Lesson;