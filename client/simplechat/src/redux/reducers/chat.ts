import { ChatActionTypes, ChatState, CONNECT_SUCCEEDED, MESSAGE_GET_ALL_SUCCEEDED, MESSAGE_RECEIVED } from '../types';

export const initialState: ChatState = {
  connected: false,
  username: '',
  messages: [],
};

export function chatReducer(state = initialState, action: ChatActionTypes): ChatState {
  switch (action.type) {
    case CONNECT_SUCCEEDED:
      const { username } = action.payload;
      return {
        ...state,
        connected: true,
        username,
      };
    case MESSAGE_RECEIVED:
      const { message } = action.payload;
      return {
        ...state,
        messages: [...state.messages, message],
      };
    case MESSAGE_GET_ALL_SUCCEEDED:
      const { messages } = action.payload;
      return {
        ...state,
        messages: [...messages],
      };
    default:
      return state;
  }
}

export default chatReducer;
