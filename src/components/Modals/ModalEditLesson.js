import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { editLesson } from '../../api/schedule';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../../styles/modal-edit-lesson.css';

const FieldContainer = ({title, value, children}) => {
  return (
    <div className='modal-edit__field-container' >
      <div className='modal-edit__left-container' >
        <div className='modal-edit__title-text' >
          {title}
        </div>
        <div>
          {value}
        </div>
      </div>
      <div className='modal-edit__right-container' >
        <div className='modal-edit__title-text' >
          {title} (New)
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
};

const ModalAddLesson = ({ show, onHide, onEdit, scheduleId, lesson, templateLessons }) => {
  const [fields, setFields] = useState({
    serial_number: '',
    subgroup: '',
    name: '',
    hour_start: '',
    minute_start: '',
    hour_end: '',
    minute_end: '',
  });

  const handleChangeField = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setFields({
      ...fields,
      [id]: value,
    });
  };  

  const handleClickSubmit = async () => {
    const lessonToEdit = {
      subgroup_id: fields.subgroup === '' ? lesson.subgroup_id : (
        fields.subgroup === 'All' ? 0 : Number(fields.subgroup)
      ),

      serial: fields.serial_number === '' ? lesson.serial : Number(fields.serial),

      time_start: [
        fields.hour_start === '' ? lesson.hour_start : Number(fields.hour_start),
        fields.minute_start === '' ? lesson.minute_start : Number(fields.minute_start),
      ],

      time_end: [
        fields.hour_end === '' ? lesson.hour_end : Number(fields.hour_end),
        fields.minute_end === '' ? lesson.minute_end : Number(fields.minute_end),
      ],
    }

    if (fields.name === '') {
      const position = templateLessons.map((item) => {
        return item.name
      }).indexOf(lesson.name);

      lessonToEdit.lesson_info_id = templateLessons[position].id;
    } else {
      const position = templateLessons.map((item) => {
        return item.name
      }).indexOf(fields.name);

      lessonToEdit.lesson_info_id = templateLessons[position].id;
    }

    await editLesson(scheduleId, lesson.id, lessonToEdit);
    onEdit();
  };

  const minuteElemets = [];

  for (let i = 0; i < 60; i++) {
    minuteElemets.push(i);
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Edit lesson
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FieldContainer title={'Serial number'} value={lesson.serial} >
            <Form.Control id='serial_number' onChange={handleChangeField} as='select' size='sm'  >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Form.Control>
          </FieldContainer>

          <FieldContainer title={'Subgroup'} value={lesson.subgroup_id} >
            <Form.Control id='subgroup' onChange={handleChangeField} as='select' size='sm' >
              <option></option>
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Control>
          </FieldContainer>

          <FieldContainer title={'Lesson name'} value={lesson.name} >
            <Form.Control as='select' id='name' onChange={handleChangeField} >
              <option></option>
              {
                
                templateLessons.length !== 0 &&
                templateLessons.map((template) => {
                  return (
                    <option key={template.id}>
                      {template.name}
                    </option>
                  )
                })
              }
            </Form.Control>
          </FieldContainer>

          <FieldContainer title={'Hour start'} value={lesson.hour_start} >
            <Form.Control as='select' id='hour_start' onChange={handleChangeField} >
              <option></option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
            </Form.Control>
          </FieldContainer>

          <FieldContainer title={'Minute start'} value={lesson.minute_start} >
            <Form.Control as='select' id='minute_start' onChange={handleChangeField}>
              <option></option>
              {
                minuteElemets.map((element) => {
                  return (
                    <option key={element}>
                      {element}
                    </option>
                  );
                })
              }
            </Form.Control>
          </FieldContainer>

          <FieldContainer title={'Hour end'} value={lesson.hour_end} >
            <Form.Control as='select' id='hour_end' onChange={handleChangeField} >
              <option></option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
            </Form.Control>
          </FieldContainer>

          <FieldContainer title={'Minute end'} value={lesson.minute_end} >
            <Form.Control as='select' id='minute_end' onChange={handleChangeField}>
              <option></option>
              {
                minuteElemets.map((element) => {
                  return (
                    <option key={element}>
                      {element}
                    </option>
                  );
                })
              }
            </Form.Control>
          </FieldContainer>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={handleClickSubmit} >
          Save
        </Button>
        <Button variant='dark' onClick={onHide} >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

FieldContainer.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

ModalAddLesson.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  scheduleId: PropTypes.number.isRequired,
  lesson: PropTypes.object.isRequired,
  templateLessons: PropTypes.array.isRequired,
};

export default ModalAddLesson;