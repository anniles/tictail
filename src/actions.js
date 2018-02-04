import getStore from './store';
import { EDIT, UPDATE, SAVE, EMPTY } from './constants/actions';

const store = getStore();

export const edit = contact => {
  store.dispatch({
    type: EDIT,
    contact,
  });
};

export const editInput = (value, field, contact) => {
  store.dispatch({
    type: UPDATE,
    value,
    field,
    contact,
  });
};

export const save = contact => {
  store.dispatch({
    type: SAVE,
    contact,
  });
};

export const emptyContact = () => {
  store.dispatch({
    type: EMPTY,
  });
};