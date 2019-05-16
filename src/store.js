import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import rootEpic from './epics';


export default function configureStore(initialState = {}, history) {
  const epicMiddleware = createEpicMiddleware();

  const middleware = [
    thunk,
    routerMiddleware(history),
    createLogger(),
    epicMiddleware
  ];

  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
