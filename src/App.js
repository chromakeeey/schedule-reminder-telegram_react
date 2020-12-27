import React from 'react';
import './App.css';

import Auth from './pages/Auth'
import NoAuth from './pages/NoAuth';
import NotFound from './pages/NotFound';

import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);

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
    <div>
      Auth
    </div>
  );
}

export default App;
