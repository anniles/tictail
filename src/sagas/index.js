import {
  put,
  call,
  fork,
  takeLatest,
  select,
} from 'redux-saga/effects';

import { LOADED } from '../constants/actions';

function* load () {
 const url = 'http://127.0.0.1:5000';

  fetch(`${url}/contacts`, {
      mode: 'no-cors',
      credentials: 'include',

      method: 'GET',
       headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(response => response.json())
    .then(json => console.log(json, 'test'))
    .catch(error => console.log('Authorization failed : ' + error.message));

  yield put({
    type: LOADED,
    // categories,
  });
}

export default function* () {
  yield fork(load);
}