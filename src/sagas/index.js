import {
  put,
  // call,
  fork,
  takeLatest,
  select,
} from 'redux-saga/effects';

import { LOADED, SAVE, SAVED, DELETE, DELETED } from '../constants/actions';
// import { getContacts } from '../api/getContacts';

function* load () {
 // const url = 'http://localhost:3000';
 // const res = yield call(getContacts, url);

  // fetch(`${url}/contacts`, {
  //     method: 'GET',
  //      headers: {
  //       'Accept': 'application/json',
  //     }
  //   })
  //   .then(response => {
  //     if(response.ok) {
  //       return response.json()
  //     } else {
  //       return Promise.reject({})
  //     }
  //   })
  //   .then(json => {
  //     console.log(json)

  //     return yield put({
  //       type: LOADED,
  //       test: json,
  //     });
  //   })
  //   .catch(error => console.log('Authorization failed : ' + error.message));

  yield put({
    type: LOADED,
  });
}

function* save ({ contact }) {
  const state = yield select();
  const { contacts } = state;

  const newContact = {};

  Object.keys(contacts).map(keys => {
    if (keys === contact.id) {
      return null;
    } else {
      newContact.id = contact.id;
      newContact.color = contact.color;
      newContact.first_name = contact.first_name;
      newContact.last_name = contact.last_name;
      newContact.location = contact.location;
      newContact.title = contact.title;
      newContact.team = contact.team;
      newContact.image = contact.image;

      return newContact;
    }
  })

  contacts[contact.id] = newContact;

  yield put({
    type: SAVED,
    contacts,
  })

}

function* deleteContact ({ contact }) {
  const state = yield select();
  const { contacts } = state;
  let filterContacts = [];

  Object.keys(contacts).filter(item => {
    if (contacts[item].id !== contact.id) {
      filterContacts.push(contacts[item]);
    }
  });

  yield put({
    type: DELETED,
    contacts: filterContacts,
  })
}

export default function* () {
  yield fork(load);

  yield takeLatest(SAVE, save);
  yield takeLatest(DELETE, deleteContact);
}
