import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Authentication } from '../api/user';

const Auth = () => {
  const { token } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Authentication(token));
  }, []);

  return (
    <div>
      {token}
    </div>
  )
};

export default Auth;