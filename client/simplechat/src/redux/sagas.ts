import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { ChatService } from '../services';
import * as actions from './actions';
import { CONNECT_REQUESTED, ConnectRequestedAction, MESSAGE_GET_ALL, MESSAGE_SEND, MessageSendAction } from './types';

function* subscribeToMessagesFromServer({ payload: { username } }: ConnectRequestedAction) {
  try {
    yield call(ChatService.createConnection);
    yield put(actions.connectSucceeded(username));
    const channel = yield call(ChatService.createChannel);
    while (true) {
      const message = yield take(channel);
      yield put(actions.messageReceived(message));
    }
  } catch (error) {
    console.error('socket error:', error);
  }
}

function* getAllMessagesFromServer() {
  try {
    const messages = yield ChatService.getAllMessages();
    yield put(actions.messageGetAllSucceeded(messages));
  } catch (error) {
    console.error('Failed to get messages', error);
  }
}

function* sendMessageToServer({ payload: { message } }: MessageSendAction) {
  try {
    yield ChatService.sendMessage(message);
  } catch (error) {
    console.error('Failed to send message', error);
  }
}

function* watchMessageSend() {
  yield takeLatest(MESSAGE_SEND, sendMessageToServer);
}

function* watchConnectRequested() {
  yield takeLatest(CONNECT_REQUESTED, subscribeToMessagesFromServer);
}

function* watchGetAllMessagesFromServer() {
  yield takeLatest(MESSAGE_GET_ALL, getAllMessagesFromServer);
}

export function* rootSaga() {
  yield fork(watchMessageSend);
  yield fork(watchConnectRequested);
  yield fork(watchGetAllMessagesFromServer);
}
