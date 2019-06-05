import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { ChatService } from '../services';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function* subscribeToMessagesFromServer({ payload: { username } }) {
  let channel = null;
  try {
    yield call(ChatService.createConnection);
    yield put(actions.connectSucceeded(username));
    channel = yield call(ChatService.createChannel);
    while (true) {
      const receivedMessage = yield take(channel);
      const message = !Array.isArray(receivedMessage) ? [receivedMessage] : receivedMessage;
      yield put(actions.messageReceived(message));
    }
  } catch (error) {
    console.error('socket error:', error);
    channel && channel.close();
  }
}

function* getAllMessagesFromServer() {
  try {
    yield ChatService.getAllMessages();
  } catch (error) {
    console.error('Failed to get messages', error);
  }
}

function* sendMessageToServer({ payload: { message } }) {
  try {
    yield ChatService.sendMessage(message);
  } catch (error) {
    console.error('Failed to send message', error);
  }
}

function* watchMessageSend() {
  yield takeLatest(actionTypes.MESSAGE_SEND, sendMessageToServer);
}

function* watchConnectRequested() {
  yield takeLatest(actionTypes.CONNECT_REQUESTED, subscribeToMessagesFromServer);
}

function* watchGetAllMessagesFromServer() {
  yield takeLatest(actionTypes.MESSAGE_GET_ALL, getAllMessagesFromServer);
}

export function* rootSaga() {
  yield fork(watchMessageSend);
  yield fork(watchConnectRequested);
  yield fork(watchGetAllMessagesFromServer);
}
