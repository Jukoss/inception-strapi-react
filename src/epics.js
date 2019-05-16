import { combineEpics } from 'redux-observable';
import logInEpic from 'components/Login/epic';

export default combineEpics(
  logInEpic,
);
