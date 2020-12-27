import React, { useEffect } from 'react';
import './App.css';

import Auth from './pages/Auth'
import NoAuth from './pages/NoAuth';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

import { Verify } from './api/user';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Verify());
  }, []);

  if (!isAuth) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/auth/:token' component={Auth}/>
          <Route path='/no-auth' component={NoAuth}/>
          <Route exact path='/'>
            <Redirect to='/no-auth' />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route exact path='/'>
          <Redirect to ='/profile'/>
        </Route>
        <Route exact path='/no-auth'>
          <Redirect to='/profile'/>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
