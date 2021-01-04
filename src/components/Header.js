import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import strings from '../locale/strings';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href="/home">{strings.brandName}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home/schedules">{strings.mySchedules}</Nav.Link>
        <Nav.Link href="/home/subscriptions">{strings.mySubs}</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder={strings.searchSchedule} className="mr-sm-1" />
        <Button variant="primary">{strings.search}</Button>
      </Form>
    </Navbar>
  );
};

export default Header;