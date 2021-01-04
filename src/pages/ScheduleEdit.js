import React from 'react';
import strings from '../locale/strings';

import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../styles/schedule-edit.css';

const ScheduleEdit = () => {
  return (
    <div>
      <Header/>
      <div className='schedule-edit__main-container'>
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
      </div>
    </div>
  );
};

export default ScheduleEdit;