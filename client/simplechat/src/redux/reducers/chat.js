import * as actionTypes from '../actionTypes';

export const initialState = {
  connected: false,
  username: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CONNECT_SUCCEEDED:
      const { username } = action.payload;
      return {
        ...state,
        connected: true,
        username,
      };
    default:
      return state;
  }
}

export default reducer;
