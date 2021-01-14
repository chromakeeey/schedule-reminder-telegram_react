/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalAddLessonTemplate = ({ show, onHide, onAdd }) => {
  const [name, setName] = useState('');

  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  }

  const handleClickAdd = () => {
    onAdd(name);
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Add lesson template
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name of lesson</Form.Label>
            <Form.Control placeholder="Enter name" onChange={handleChangeName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='dark' onClick={onHide} >
          Close
        </Button>
        <Button variant='success' onClick={handleClickAdd}  >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ModalAddLessonTemplate;