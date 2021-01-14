import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { 
  scheduleSubscribers, 
  getScheduleToEdit, 
  addLessonTemplate,
  deleteLessonTemplate,
} from '../api/schedule';

import strings from '../locale/strings';
import UserOnScheduleEdit from '../components/UserOnScheduleEdit';
import ScheduleManage from '../components/ScheduleManage';
import ModalAddLesson from '../components/Modals/ModalAddLesson';
import ModalAddLessonTemplate from '../components/Modals/ModalAddLessonTemplate';
import ModalForSure from '../components/Modals/ModalForSure';
import NothingFound from '../components/NothingFound';
import LessonEdit from '../components/LessonEdit';

import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Plus } from 'react-bootstrap-icons';

import '../styles/schedule-edit.css';

const ScheduleEdit = () => {
  const { scheduleId } = useParams();

  const [loaded, setLoaded] = useState(false);
  const [tabKey, setTabKey] = useState('schedule');
  const [schedule, setSchedule] = useState({});
  const [users, setUsers] = useState([]);
  const [templateSelected, setTemplateSelected] = useState(0);
  const [modalSureShow, setModalSureShow] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalTemplateShow, setModalTemplateShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [daySelected, setDaySelected] = useState(0);

  const fetchData = async () => {
    const fetchSchedule = await getScheduleToEdit(scheduleId);
    setSchedule(fetchSchedule);

    const fetchUsers = await scheduleSubscribers(scheduleId);
    setUsers(fetchUsers);

    setLoaded(true);
  };

  const handleOnScheduleEdit = async () =>  {
    console.log('edit');
  }

  const handleClickOnAddLesson = async (dayIndex) => {
    setDaySelected(dayIndex);
    setModalAdd(true);
  }

  const handleClickAddTemplateLesson = async () => {
    setModalTemplateShow(true);
  }

  const handleAddTemplateLesson = async (name) => {
    await addLessonTemplate(schedule.id, name);
    fetchData();
  }

  const handleClickDeleteTemplate = async (lessonTemplateId) => {
    setTemplateSelected(lessonTemplateId);
    setModalSureShow(true);
  }

  const handleDeleteLessonTemplate = async () => {
    setModalSureShow(false);

    await deleteLessonTemplate(schedule.id, templateSelected);
    fetchData();
  }

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
        <ModalForSure 
          title={'Delete lesson template'} 
          text={'Are you sure?'} 
          show={modalSureShow} 
          onHide={() => setModalSureShow(false)} 
          onOk={handleDeleteLessonTemplate} 
        />

        <ModalAddLesson show={modalAdd} onHide={() => setModalAdd(false)} templateLessons={schedule.lessons} />
        <ModalAddLessonTemplate show={modalTemplateShow} onHide={() => setModalTemplateShow(false)} onAdd={handleAddTemplateLesson} />
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

        <div className='schedule-edit__container-lessons' >
          <h5>{strings.lessons}</h5>
          <div>
            {
              schedule.lessons.length !== 0
              ? schedule.lessons.map((lesson) => {
                return (
                  <div key={lesson.id} >
                    <LessonEdit lesson={lesson} onClickDelete={handleClickDeleteTemplate} />
                  </div>
                )
              })
              : <NothingFound/>
            }
            <div className='schedule-manage__button-add' onClick={handleClickAddTemplateLesson} >
              <Plus size={24} />
            </div>
          </div>
        </div>

        <Tabs activeKey={tabKey} onSelect={(key) => setTabKey(key)} >
          <Tab eventKey='schedule' title='Schedule' >
            <ScheduleManage schedule={schedule} onEdit={handleOnScheduleEdit} onClickAdd={handleClickOnAddLesson} />
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