import { LOADED, EDIT, UPDATE, SAVED, EMPTY, DELETED } from '../constants/actions';
import { contactInitial } from '../constants';

export default (state = {}, action) => {
  const {
    type,
    contact,
    contacts,
    value,
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
      return {
        ...state,
        contacts,
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