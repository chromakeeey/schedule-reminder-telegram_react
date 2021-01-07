import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { changeLanguage } from '../api/language';
import { getUser } from '../api/user';
import strings from '../locale/strings';
import '../styles/navbar.css';

import GB from '../images/GB.svg';
import RU from '../images/RU.svg';
import UA from '../images/UA.svg';

const Header = () => {
  const userId = useSelector(state => state.user.currentUser);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const fetchData = async () => {
    const _user = await getUser(userId);
    setUser(_user);
  };

  const handleClickLanguage = (language) => {
    dispatch(changeLanguage(language));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Navbar bg='dark' variant='dark' className='navbar-main-container' >
      <Navbar.Brand href="/home">{strings.brandName}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home/schedules">{strings.mySchedules}</Nav.Link>
        <Nav.Link href="/home/subscriptions">{strings.mySubs}</Nav.Link>
        {
          user.admin_level !== undefined &&
          user.admin_level > 0 &&
          <Nav.Link href="/admin" className='user-link' >
            {strings.adminPanel}
          </Nav.Link>  
        }
      </Nav>
      {
        user !== undefined &&
        <div inline className='navbar__user-container' >
          <div>
            <div className='navbar__user-container-name'>
              {user.name}
            </div>
            <Link to={`/users/${user.chatid}`} className='user-link'>
              {user.username} (id:{user.chatid})
            </Link>
          </div>
          <div className='navbar__language-contaner' >
            <div onClick={() => handleClickLanguage('en')} >
              <img src={GB} className='navbar-language'/>
            </div>
            <div onClick={() => handleClickLanguage('ru')} >
              <img src={RU} className='navbar-language'/>
            </div>
            <div onClick={() => handleClickLanguage('ua')} >
              <img src={UA} className='navbar-language'/>
            </div>
          </div>
        </div>
      }
    </Navbar>
  );
};

export default Header;