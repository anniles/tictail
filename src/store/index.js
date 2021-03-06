import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import saga from '../sagas';
import { contactInitial } from '../constants';

let store;

export default props => {
  if (store) {
    return store;
  }

  const sagaMiddleware = createSagaMiddleware();
  const initialState = {
    contacts: {},
    contact: contactInitial,
    isLoading: true,
  };

  store = createStore(
    reducer,
    initialState,
    composeWithDevTools({ name: 'Admin Tictail' })(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(saga);

  return store;
};