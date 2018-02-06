import {
  put,
  // call,
  fork,
  takeLatest,
  select,
} from 'redux-saga/effects';
import getStore from '../store';

import {
  LOADED,
  SAVE,
  SAVED,
  DELETE,
  DELETED,
  FILTER_CONTACTS,
} from '../constants/actions';

const url = 'http://localhost:3000';

function* load () {
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
      // console.log(json)

      store.dispatch({
        type: LOADED,
        contacts: json,
      })
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
}

function* save ({ contact, dispatch }) {
  const state = yield select();
  const { contacts } = state;

  const newContact = {};
  const newContacts = [];

  Object.keys(contacts).map((keys, i) => {
    if (contacts[keys].id !== contact.id) {
      newContacts.splice(i, 0, contacts[keys]);
    } else {
      newContact.id = contact.id;
      newContact.color = contact.color;
      newContact.first_name = contact.first_name;
      newContact.last_name = contact.last_name;
      newContact.location = contact.location;
      newContact.title = contact.title;
      newContact.team = contact.team;
      newContact.image = contact.image;

      newContacts.splice(i, 0, newContact);
    }
  })

  // if we have no contacts yet!
  if (Object.keys(newContact).length === 0) {
    newContact.color = contact.color;
    newContact.first_name = contact.first_name;
    newContact.id = contact.id;
    newContact.image = contact.image;
    newContact.last_name = contact.last_name;
    newContact.location = contact.location;
    newContact.team = contact.team;
    newContact.title = contact.title;

    newContacts.splice(0, 0, newContact);
  }

  const data = {
    first_name: newContact.first_name,
    last_name: newContact.last_name,
    title: newContact.title,
    color: newContact.color,
    image: newContact.image,
    location: Intl.DateTimeFormat().resolvedOptions().timeZone,
    team: newContact.team,
  }

  // fetch(`${url}/contacts/${newContact.id}`, {
  //   method: 'PUT',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Accept': 'application/json',
  //   }
  // })
  // .then(response => {
  //   if(response.ok) {
  //     return response.json()
  //   } else {
  //     return Promise.reject({})
  //   }
  // })
  // .then(json => {
  //   // console.log(json)

  //   // dispatch({
  //   //   type: LOADED,
  //   //   contacts: json,
  //   // })
  // })
  // .catch(error => console.log('Authorization failed : ' + error.message));

  yield put({
    type: SAVED,
    contacts: newContacts,
  })

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
      // console.log(json)

      dispatch({
        type: LOADED,
        contacts: json,
      })
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
}

export default function* () {
  yield fork(load);

  yield takeLatest(SAVE, save);
  yield takeLatest(DELETE, deleteContact);
  yield takeLatest(FILTER_CONTACTS, filterContacts);
}
