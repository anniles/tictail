import {
  put,
  call,
  fork,
  takeLatest,
  select,
} from 'redux-saga/effects';

// import { getCategories } from '../api';
import { LOADED } from '../constants/actions';

function* load () {
  // const categories = yield call(getCategories);

  yield put({
    type: LOADED,
    // categories,
  });
}

export default function* () {
  yield call(load);
}