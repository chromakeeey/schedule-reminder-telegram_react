/* eslint-disable react/prop-types */
import React from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ModalAddLesson = ({ show, onHide, templateLessons }) => {
  const minuteElemets = [];

  for (let i = 0; i < 60; i++) {
    minuteElemets.push(i);
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Add lesson
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="4" >
              <Form.Label>Serial number</Form.Label>
              <Form.Control as='select' >
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
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Subgroup</Form.Label>
              <Form.Control as='select' >
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Lesson name</Form.Label>
            <Form.Control as='select' >
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
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} md="4" >
              <Form.Label>Hour start</Form.Label>
              <Form.Control as='select' >
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
            </Form.Group>
            <Form.Group as={Col} md="4" >
              <Form.Label>Minute start</Form.Label>
              <Form.Control as='select' >
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
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} md="4" >
              <Form.Label>Hour end</Form.Label>
              <Form.Control as='select' >
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
            </Form.Group>
            <Form.Group as={Col} md="4" >
              <Form.Label>Minute end</Form.Label>
              <Form.Control as='select' >
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
            </Form.Group>
          </Form.Row>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='dark' onClick={onHide} >
          Close
        </Button>
        <Button variant='success' onClick={onHide} >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ModalAddLesson;