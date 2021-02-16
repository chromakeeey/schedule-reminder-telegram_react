/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/lesson.css';

import Button from 'react-bootstrap/Button';
import { X } from 'react-bootstrap-icons';

const LessonEdit = ({ lesson, onClickDelete }) => {
  return (
    <div className='lessons-edit-container' >
      <div className='lessons-edit-container__name' >
        {lesson.name}
      </div>
      <div>
        <Button variant='outline-danger' onClick={() => onClickDelete(lesson.id)} >
          <X/>
        </Button>
      </div>
    </div>
  )
};

export default LessonEdit;