import webstomp from 'webstomp-client';
import { eventChannel } from 'redux-saga';

export class ChatService {
  static stompClient = null;

  static async createConnection() {
    ChatService.stompClient = webstomp.client('ws://localhost:8080/chat/websocket');
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

  static sendMessage(message) {
    ChatService.stompClient.send('/app/sendMessage', JSON.stringify(message));
  }
}
