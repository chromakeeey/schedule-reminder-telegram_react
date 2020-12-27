import React from 'react';
import Button from 'react-bootstrap/Button';

import strings from '../locale/strings';
import '../styles/no-auth.css';

const NoAuth = () => {
  strings.setLanguage('en');

  return (
    <div className='no-auth__main-container' >
      <div className='no-auth__label' >
        {strings.noAuthLabel}
      </div>
      <div className='no-auth__message'>
        {strings.telegramAuth}
      </div>
      <Button variant='secondary' href="https://telegram.me/schedule_rmnd_bot" >
        {strings.goTelegram}
      </Button>
    </div>
  )
};

export default NoAuth;