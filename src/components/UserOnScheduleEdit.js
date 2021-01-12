/* eslint-disable react/prop-types */
import React from 'react';

import Button from 'react-bootstrap/Button';
import { X } from 'react-bootstrap-icons';

import '../styles/user-on-schedule.css';

const UserOnScheduleEdit = ({index, user}) => {
  return (
    <div className='user-on-schedule__main-container' >
      <div className='user-on-schedule__index' >
        {index}
      </div>
      <div className='user-on-schedule__main-container-names' >
        <span>{user.name}</span>
        <a className='user-on-schedule__user-name' href={`/users/${user.chatid}`} >
          {user.username}
        </a>
      </div>
      <div>
        <Button variant='outline-danger'>
          <X size={17} /> Remove
        </Button>
      </div>
    </div>
  );
};

export default UserOnScheduleEdit;