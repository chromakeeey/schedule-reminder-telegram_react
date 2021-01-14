/* eslint-disable react/prop-types */
import React from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalForSure = ({ title, text, show, onHide, onOk }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {text}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='dark' onClick={onHide} >
          No
        </Button>
        <Button variant='success' onClick={onOk}  >
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ModalForSure;