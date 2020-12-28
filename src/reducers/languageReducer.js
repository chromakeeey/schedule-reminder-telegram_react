import { SET_LANGUAGE } from './types'; 

const defaultState = 'en';

export default function languageReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LANGUAGE: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

export const setLanguage = (language) => ({type: SET_LANGUAGE, payload: language});