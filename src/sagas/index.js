import {
  put,
  call,
  fork,
  takeLatest,
  select,
} from 'redux-saga/effects';

import { LOADED, SAVE, SAVED } from '../constants/actions';
import { getContacts } from '../api/getContacts';

function* load () {
 const url = 'http://localhost:3000';
 const res = yield call(getContacts, url);

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
  console.log(contacts, contact);

  const newContact = {};

  Object.keys(contacts).map(keys => {
    if (keys === contact.id) {
      // console.log(keys, contact.id);
      return;
    } else {
      newContact.id = contact.id;
      newContact.color = contact.color;
      newContact.first_name = contact.first_name;
      newContact.last_name = contact.last_name;
      newContact.location = contact.location;
      newContact.title = contact.title;
      newContact.team = contact.team;
      newContact.image = contact.image;
    }
  })
  console.log({newContact});

  contacts[contact.id] = newContact;
  console.log({contacts});
  console.log(contacts[contact.id], 'contacts[contact.id]');

  yield put({
    type: SAVED,
    contacts,
  })

}

export default function* () {
  yield fork(load);

  yield takeLatest(SAVE, save);
}
