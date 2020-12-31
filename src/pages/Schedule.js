import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSchedule } from '../api/schedule';

import Header from '../components/Header';
import '../styles/schedule-page.css';

const Schedule = () => {
  const { scheduleId } = useParams();
  const [schedule, setSchedule] = useState({});
  const date = new Date(schedule.created_at);

  useEffect(() => {
    async function load() {
      const apiSchedule = await getSchedule(scheduleId);
      setSchedule(apiSchedule);
    }

    load();
  }, []);

  if (!schedule) {
    return (
      <div>
        <Header/>
      </div>
    );
  }

  console.log(schedule);

  return (
    <div>
      <Header/>
      <div className='schedule-page__main-container'>
        <h1>
          {schedule.name}
        </h1>
        <h5>
          #{schedule.id}
        </h5>
        <div>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Schedule;