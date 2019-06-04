import { call, put, take, takeLatest } from 'redux-saga/effects';
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
      const message = yield take(channel);
      console.log(message);
    }
  } catch (error) {
    console.error('socket error:', error);
    channel && channel.close();
  }
}

export function* watchConnectRequested() {
  yield takeLatest(actionTypes.CONNECT_REQUESTED, subscribeToMessagesFromServer);
}
