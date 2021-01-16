/* eslint-disable react/prop-types */
import React from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalError = ({ title, text, show, onHide }) => {
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
        <Button variant='success' onClick={onHide}  >
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ModalError;