import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import axiosInstance from '../api/axiosInstance';

import axios from 'axios';

const Auth = () => {
  const { token } = useParams();

  useEffect(() => {
    // async function getAnswer() {
    //   const answer = await axiosInstance.get(`auth/${token}`);

    //   return answer;
    // }

    // console.log(getAnswer());

    axios.get(`http://localhost:5000/auth/${token}`).
      then(res => console.log(res.data));

  }, []);

  return (
    <div>
      {token}
    </div>
  )
};

export default Auth;