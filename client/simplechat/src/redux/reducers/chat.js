import * as actionTypes from '../actionTypes';

export const initialState = {
  connected: false,
  username: '',
  messages: [],
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
    case actionTypes.MESSAGE_RECEIVED:
      const { message } = action.payload;
      return {
        ...state,
        messages: [...state.messages, message],
      };
    case actionTypes.MESSAGE_GET_ALL_SUCCEEDED:
      const { messages } = action.payload;
      return {
        ...state,
        messages: [...messages],
      };
    default:
      return state;
  }
}

export default reducer;
