import { LOADED } from '../constants/actions';

export default (state = {}, action) => {
  const {
    type,
    // categories,
  } = action;

  switch (type) {
    case LOADED:
      return {
        ...state,
        // categories,
      };

    default:
      return state;
  }
};