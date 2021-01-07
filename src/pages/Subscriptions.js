import React, { useState, useEffect } from 'react'
import { getSubscriptions, unSubscribeSchedule } from '../api/user';
import { useSelector } from 'react-redux';

import { BookmarkCheck } from 'react-bootstrap-icons';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';

import strings from '../locale/strings';
import '../styles/subs-page.css';

const Subscriptions = () => {
  const userId = useSelector(state => state.user.currentUser);

  const [loaded, setLoaded] = useState(false);
  const [subscriptions, setSubscriptions] = useState({});

  const handleClickUnSubscribe = async (subscription) =>{
    await unSubscribeSchedule(userId, subscription.schedule_id);
    fetchData();
  };

  const fetchData = async () => {
    setSubscriptions(await getSubscriptions(userId));
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!loaded) {
    return (
      <Header/>
    );
  }

  console.log(subscriptions);

  return (
    <div>
      <Header/>
      <div className='subs-page__main-container' >
        <h3 className='profile-headers' >
          <BookmarkCheck size={20} className='pofile-headers__icon' />
          {strings.mySubs}
        </h3>
        <Form>
          <Form.Group>
            <Form.Label>{strings.nameSchedule}</Form.Label>
            <Form.Control placeholder={strings.enterScheduleName} />
            <Form.Text className="text-muted">
              {strings.unicalKeySearchSchedule}
            </Form.Text>
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{strings.idSchedule}</th>
              <th>{strings.nameSchedule}</th>
              <th>{strings.actions}</th>
            </tr>
          </thead>
          <tbody>
            {
              subscriptions.length !== 0 &&
              subscriptions.map((subscription) => {
                return (
                  <tr key={subscription.id} >
                    <td>{subscription.schedule_id}</td>
                    <td>{subscription.name}</td>
                    <td>
                      <Button variant='outline-danger' style={{marginRight: 15}} 
                        onClick={() => handleClickUnSubscribe(subscription)} >
                        {strings.unSubscribe}
                      </Button>
                      <Button variant='outline-primary' href={`/schedules/${subscription.schedule_id}`} >
                        {strings.view}
                      </Button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
};

export default Subscriptions;