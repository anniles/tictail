import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import saga from '../sagas';
import { contacts_res } from '../constants';
import { contactInitial } from '../constants';

let store;

export default props => {
  if (store) {
    return store;
  }

  const sagaMiddleware = createSagaMiddleware();
  const initialState = {
    contacts: contacts_res,
    contact: contactInitial,
    // contacts: {
    //   id: '',            // Unique identifier
    //   first_name: '',    // First name
    //   last_name: '',     // Last name
    //   title: '',         // Role title
    //   color: '',         // Arbitrary HTML color code without # prefix
    //   image: '',         // URL to avatar
    //   location: '',      // Location as timezone https://en.wikipedia.org/wiki/Tz_database
    //   team: '',          // Function level team
    // },
  };

  store = createStore(
    reducer,
    initialState,
    composeWithDevTools({ name: 'Admin Tictail' })(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(saga);

  return store;
};