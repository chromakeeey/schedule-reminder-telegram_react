import React from 'react';
import strings from '../locale/strings';
import '../styles/schedule-page.css';

const NothingFound = () => {
  return (
    <div className='nothing-found-text' >
      {strings.nothingFound}
    </div>
  )
};

export default NothingFound;