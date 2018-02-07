import {
  put,
  call,
  takeLatest,
  select,
} from 'redux-saga/effects';
import getStore from '../store';

import {
  LOADED,
  SAVE,
  DELETE,
  DELETED,
  FILTER_CONTACTS,
  LOAD,
  LOADED_CONTACT,
} from '../constants/actions';

const url = 'http://localhost:3000';

function* load () {
 const pathnameParts = window.location.pathname.split(':');

 if (pathnameParts[1]) {
  return;
 }

 const store = getStore();

  fetch(`${url}/contacts`, {
      method: 'GET',
       headers: {
        'Accept': 'application/json',
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        return Promise.reject({})
      }
    })
    .then(json => {

      store.dispatch({
        type: LOADED,
        contacts: json,
      })
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
}

function* loadContact () {
 const pathnameParts = window.location.pathname.split(':');

 if (!pathnameParts[1]) {
  return;
 }

 const store = getStore();

  fetch(`${url}/contacts/${pathnameParts[1]}`, {
      method: 'GET',
       headers: {
        'Accept': 'application/json',
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        return Promise.reject({})
      }
    })
    .then(json => {
       console.log(json)

      store.dispatch({
        type: LOADED_CONTACT,
        contact: json,
      })
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
}

function* save ({ contact, dispatch }) {
  let rpcURL = `${url}/contacts`;
  let method = 'POST';

  const body = new FormData();
  body.append('first_name', contact.first_name);
  body.append('last_name', contact.last_name);
  body.append('title', contact.title);
  body.append('color', contact.color);
  body.append('image', contact.image);
  body.append('location', Intl.DateTimeFormat().resolvedOptions().timeZone);
  body.append('team', contact.team);

  if (contact.id) {
    rpcURL = `${url}/contacts/${contact.id}`;
    method = 'PUT';
  }
  console.log(contact)

  fetch(rpcURL, {
    method,
    body,
    headers: {
      'Accept': 'application/json',
    }
  })
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      return Promise.reject({})
    }
  })
  .then(json => {
    console.log(json)
    dispatch({
      type: LOAD,
    })
  })
  .catch(error => console.log('Authorization failed : ' + error.message));

}

function* deleteContact ({ contact }) {
  const state = yield select();
  const { contacts } = state;
  let filterContacts = {};

  Object.keys(contacts).filter(item => {
    if (contacts[item].id !== contact.id) {
      filterContacts[item] = contacts[item];
    }
  });

  yield put({
    type: DELETED,
    contacts: filterContacts,
  })
}

function* filterContacts ({ contact_property, filter_value, dispatch }) {
  fetch(`${url}/contacts?${contact_property}=${filter_value}`, {
      method: 'GET',
       headers: {
        'Accept': 'application/json',
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        return Promise.reject({})
      }
    })
    .then(json => {

      dispatch({
        type: LOADED,
        contacts: json,
      })
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
}

export default function* () {
  yield call(load);
  yield call(loadContact);

  yield takeLatest(LOAD, load);
  yield takeLatest(SAVE, save);
  yield takeLatest(DELETE, deleteContact);
  yield takeLatest(FILTER_CONTACTS, filterContacts);
}
