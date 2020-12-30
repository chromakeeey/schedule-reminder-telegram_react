import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserSchedules } from '../api/schedule';

import strings from '../locale/strings';
import OwnSchedule from '../components/OwnSchedule';
import Header from '../components/Header';
import '../styles/profile.css';

const Profile = () => {
  const userId = useSelector(state => state.user.currentUser);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function load() {
      const schedules = await getUserSchedules(userId);
      setSchedules(schedules);
    }

    load();
  }, []);

  return (
    <div>
      <Header/>
      <div className='profile__main-container' >
        <h3>{strings.mySchedules}</h3>
        <div className='profile__my-schedules' >
          {
            schedules.length !== 0 &&
            schedules.map(schedule => {
              return (
                <div key={schedule.id} >
                  <OwnSchedule schedule={schedule} />
                </div>
              )
            })
          }
        </div>
        <h3>{strings.mySubs}</h3>
      </div>
    </div>
  );
};

export default Profile;