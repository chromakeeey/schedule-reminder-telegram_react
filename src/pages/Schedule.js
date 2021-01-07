import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSchedule } from '../api/schedule';
import { subscribeSchedule, unSubscribeSchedule } from '../api/user';

import strings from '../locale/strings';

import ScheduleComponent from '../components/ScheduleComponent';
import Lesson from '../components/Lesson';
import Header from '../components/Header';
import '../styles/schedule-page.css';

import Button from 'react-bootstrap/Button';
import { PencilFill, Check, Newspaper, CardList } from 'react-bootstrap-icons';

const Schedule = () => {
  const { scheduleId } = useParams();
  const [schedule, setSchedule] = useState({});
  const userId = useSelector(state => state.user.currentUser)

  const date = new Date(schedule.created_at);

  const fetchData = async () => {
    const _schedule = await getSchedule(scheduleId);
    setSchedule(_schedule);

    return true;
  }

  const handleClickSubscribe = async () => {
    schedule.is_subscribe
    ? await unSubscribeSchedule(userId, schedule.id)
    : await subscribeSchedule(userId, schedule.id);

    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!schedule) {
    return (
      <div>
        <Header/>
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <div className='schedule-page__main-container'>
        <div className='schedule-page__header-container' >
          <div className='schedule-page__header-container-left' >
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
          <div>
            <Button variant='outline-success' onClick={handleClickSubscribe} >
              <Check style={{paddingRight: 5}} />
              {
                schedule.is_subscribe
                ? strings.subscribe
                : strings.unSubscribe
              }
            </Button>
            {
              schedule.is_edit &&
              <Button variant='outline-dark' className='schedule-page__button-edit' href={`/schedules/${schedule.id}/edit`} >
                <PencilFill style={{paddingRight: 5}} />
                {strings.edit}
              </Button>
            }
          </div>
        </div>
        <h3 className='schedule-page__headers' >
          <CardList className='schedule-page__headers-icon' />
          {strings.lessons}
        </h3>
        <div className='schedule-page__lessons-container' >
        {
          schedule.lessons !== undefined &&
          schedule.lessons.length !== 0 &&
          schedule.lessons.map(lesson => {
            return (
              <div key={lesson.id}>
                <Lesson lesson={lesson} />
              </div>
            );
          })
        }
        {
          schedule.lessons !== undefined &&
          schedule.lessons.length === 0 &&
          <div className='nothing-found-text' >
            {strings.nothingFound}
          </div>
        }
        </div>
        <h3 className='schedule-page__headers' >
          <Newspaper className='schedule-page__headers-icon' />
          {strings.schedule}
        </h3>
        <ScheduleComponent schedule={schedule} />
      </div>
    </div>
  );
};

export default Schedule;