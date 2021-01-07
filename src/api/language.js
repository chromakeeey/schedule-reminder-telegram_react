import { setLanguage } from '../reducers/languageReducer';

export const changeLanguage = (language) => {
  return async (dispatch) => {
    dispatch(setLanguage(language));
    localStorage.setItem('language', language);  
  }
};

export const getLanguage = () => {
  return async (dispatch) => {
    const language = localStorage.getItem('language');
    
    if (language == null) {
      localStorage.setItem('language', 'en');
      dispatch(setLanguage('en'));
    }
    else {
      dispatch(setLanguage(language));
    }
  }
}