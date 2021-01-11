import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { scheduleSubscribers, getSchedule } from '../api/schedule';

import strings from '../locale/strings';
import UserOnScheduleEdit from '../components/UserOnScheduleEdit';

import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import '../styles/schedule-edit.css';

const ScheduleEdit = () => {
  const { scheduleId } = useParams();

  const [loaded, setLoaded] = useState(false);
  const [tabKey, setTabKey] = useState('schedule');
  const [schedule, setSchedule] = useState({});
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const fetchSchedule = await getSchedule(scheduleId);
    setSchedule(fetchSchedule);

    const fetchUsers = await scheduleSubscribers(scheduleId);
    setUsers(fetchUsers);

    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!loaded) {
    return (
      <></>
    );
  }

  return (
    <div>
      <Header/>
      <div className='schedule-edit__main-container'>
        {schedule.name}
        <Form>
          <Form.Group>
            <Form.Label>{strings.nameSchedule}</Form.Label>
            <Form.Control placeholder={strings.enterScheduleName} />
            <Form.Text className="text-muted">
              {strings.unicalKeySearchSchedule}
            </Form.Text>
          </Form.Group>
        </Form>
        <div className='schedule-edit__button-container' >
          <Button variant='danger' >
            Delete
          </Button>
          <Button variant='success' className='schedule-edit__button-success' >
            Save
          </Button>
        </div>
        <Tabs activeKey={tabKey} onSelect={(key) => setTabKey(key)} >
          <Tab eventKey='schedule' title='Schedule' >
            Schedule_
          </Tab>
          <Tab eventKey='user' title='Users'>
            {
              users.length !== 0 &&
              users.map((user, index) => {
                return (
                  <div key={user.chatid} >
                    <UserOnScheduleEdit index={index + 1} user={user} />
                  </div>
                )
              })
            }
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ScheduleEdit;