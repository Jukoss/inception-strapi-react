import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import inception from 'components/Login/reducer';

export default combineReducers({
  form,
  inception
});

