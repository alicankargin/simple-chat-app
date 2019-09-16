function getChatState(store) {
  return store.chat;
}

export function getUsername(store) {
  return getChatState(store) && getChatState(store).username;
}

export function getMessages(store) {
  return getChatState(store) && getChatState(store).messages;
}

export function getConnected(store) {
  return getChatState(store) && getChatState(store).connected;
}
