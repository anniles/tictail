import { LOADED } from '../constants/actions';

export default (state = {}, action) => {
  const {
    type,
  } = action;

  switch (type) {
    case LOADED:
      return {
        ...state,
      };

    default:
      return state;
  }
};