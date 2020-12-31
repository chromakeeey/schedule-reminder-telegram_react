/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';

import '../styles/own-schedule.css';

const OwnSchedule = ({ schedule }) => {
  const date = new Date(schedule.created_at);
  const history = useHistory();
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(schedule);

    history.push(`/schedules/${schedule.id}`);
  }

  return (
    <div className='own-schedule__container' >
      <div className='flex-1' >
        <div className='flex-direction-column' >
          <h5>{schedule.name}</h5>
          <span className='id-span' >#{schedule.id}</span>
        </div>
        <div className='own-schedule__date' >
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </div>
      </div>
      <div className='own-schedule__button-go' >
        <Button variant='outline-secondary' onClick={handleClick} >
          <ArrowRight size={17} />
        </Button>
      </div>
    </div>
  );
};

export default OwnSchedule;