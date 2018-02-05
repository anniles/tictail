import { LOADED, EDIT, UPDATE, SAVED, EMPTY, DELETED, UPDATE_IMAGE } from '../constants/actions';
import { contactInitial } from '../constants';

export default (state = {}, action) => {
  const {
    type,
    contact,
    contacts,
    value,
    image,
    field,
  } = action;

  switch (type) {
    case LOADED:
      return {
        ...state,
      };

    case EDIT: {
      return {
        ...state,
        contact,
      };
    }

    case EMPTY: {
      contactInitial.id = '';

      return {
        ...state,
        contact: contactInitial,
      };
    }

    case SAVED: {
      return {
        ...state,
        contacts,
      };
    }

    case DELETED: {
      console.log(contacts);
      return {
        ...state,
        contacts,
      };
    }

    case UPDATE_IMAGE: {
      return {
        ...state,
        contact: {
          ...contact,
          image,
        },
      };
    }

    case UPDATE: {
      const temp_contact = {};

      Object.keys(contact).map(keys => {
        if (keys === field) {
          temp_contact[keys] = value;
        } else {
          temp_contact[keys] = contact[keys];
        }
        return temp_contact;
      });

      return {
        ...state,
        contact: temp_contact,
      };
    }

    default:
      return state;
  }
};