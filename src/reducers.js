import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import token from 'components/Login/reducer';

export default combineReducers({
  form,
  token
});

