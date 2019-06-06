import webstomp from 'webstomp-client';
import { eventChannel } from 'redux-saga';

const SERVER_WS_URL = 'ws://localhost:8080';
const SERVER_HTTP_URL = 'http://localhost:8080';

export class ChatService {
  static stompClient = null;

  static async createConnection() {
    ChatService.stompClient = webstomp.client(`${SERVER_WS_URL}/chat/websocket`);
    await new Promise((resolve, reject) =>
      ChatService.stompClient.connect({}, () => {
        if (ChatService.stompClient.connected === true) {
          resolve();
        }
      }),
    );
  }

  static async createChannel() {
    return eventChannel((emit) => {
      const responseHandler = (response) => {
        emit(JSON.parse(response.body));
      };

      const errorHandler = (errorEvent) => {
        emit(new Error(errorEvent.reason));
      };

      ChatService.stompClient.subscribe('/chat/public', responseHandler, errorHandler);

      const unsubscribe = () => {
        ChatService.stompClient.disconnect();
      };

      return unsubscribe;
    });
  }

  static async getAllMessages() {
    const response = await fetch(`${SERVER_HTTP_URL}/messages`);
    return await response.json();
  }

  static sendMessage(message) {
    ChatService.stompClient.send('/app/sendMessage', JSON.stringify(message));
  }
}
