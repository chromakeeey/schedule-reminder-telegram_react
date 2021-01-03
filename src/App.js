import React, { useEffect, useState } from 'react';
import './App.css';

import Auth from './pages/Auth'
import NoAuth from './pages/NoAuth';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';

import { getLanguage } from './api/language';
import { Verify } from './api/user';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import strings from './locale/strings';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const language = useSelector(state => state.language);

  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  strings.setLanguage(language);

  useEffect(() => {
    async function load() {
      await dispatch(Verify());
      await dispatch(getLanguage());

      setLoaded(true);
    }

    load();
  }, []);

  if (loaded) {
    if (!isAuth) {
      return (
        <Switch>
          <Route path='/auth/:token' exact component={Auth}/>
          <Route path='/no-auth' exact component={NoAuth}/>
          <Route exact path='/'>
            <Redirect to='/no-auth' />
          </Route>
          <Route path='*' exact component={NotFound} />
        </Switch>
      )
    }

    return (
      <Switch>
        <Route path='/home' exact component={Profile} />
        <Route path='/home/schedules' exact component={Profile} />
        <Route path='/schedules/:scheduleId' exact component={Schedule} />
        <Route exact path='/'>
          <Redirect to ='/home'/>
        </Route>
        <Route exact path='/no-auth'>
          <Redirect to='/home'/>
        </Route>
        <Route exact path='/auth/:token'>
          <Redirect to='/home'/>
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }

  return (<></>);
}

export default App;
