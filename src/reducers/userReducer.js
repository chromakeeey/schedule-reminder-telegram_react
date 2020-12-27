import { SET_USER, LOGOUT } from './types';

const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      }
    }

    case LOGOUT: {
      console.log('STATE_LOGOUT');
      localStorage.removeItem('access-token');

      return {
        ...state,
        currentUser: {},
        isAuth: false,
      }
    }

    default: {
      return state;
    }
  }
}

export const setUser = (user) => ({type: SET_USER, payload: user});
export const logOut = () => ({type: LOGOUT});
