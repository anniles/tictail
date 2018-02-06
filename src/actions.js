import getStore from './store';
import {
  EDIT,
  UPDATE,
  SAVE,
  EMPTY,
  DELETE,
  UPDATE_IMAGE,
  UPDATE_FILTER_VALUE,
  FILTER_CONTACTS,
} from './constants/actions';

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

export const save = (contact, dispatch) => {
  store.dispatch({
    type: SAVE,
    contact,
    dispatch,
  });
};

export const emptyContact = () => {
  store.dispatch({
    type: EMPTY,
  });
};

export const deleteContact = contact => {
  store.dispatch({
    type: DELETE,
    contact,
  });
};

export const updateImage = (image, contact) => {
  store.dispatch({
    type: UPDATE_IMAGE,
    image,
    contact,
  });
};

export const updateFilter = (value, field) => {
  store.dispatch({
    type: UPDATE_FILTER_VALUE,
    value,
    field,
  });
};

export const filterContacts = (contact_property, filter_value, dispatch) => {
  store.dispatch({
    type: FILTER_CONTACTS,
    contact_property,
    filter_value,
    dispatch,
  });
};