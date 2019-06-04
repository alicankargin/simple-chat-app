import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchConnectRequested, watchMessageSend } from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchConnectRequested);
sagaMiddleware.run(watchMessageSend);
