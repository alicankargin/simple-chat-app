import { eventChannel } from 'redux-saga';
import webstomp from 'webstomp-client';

const SERVER_WS_URL = 'ws://localhost:8080';
const SERVER_HTTP_URL = 'http://localhost:8080';

export class ChatService {
  public static stompClient = webstomp.client(`${SERVER_WS_URL}/chat/websocket`);

  public static async createConnection() {
    await new Promise((resolve, reject) =>
      ChatService.stompClient.connect({}, () => {
        if (ChatService.stompClient.connected === true) {
          resolve();
        }
      }),
    );
  }

  public static async createChannel() {
    return eventChannel((emit) => {
      const responseHandler = (response) => {
        emit(JSON.parse(response.body));
      };

      ChatService.stompClient.subscribe('/chat/public', responseHandler);

      const unsubscribe = () => {
        ChatService.stompClient.disconnect();
      };

      return unsubscribe;
    });
  }

  public static async getAllMessages() {
    const response = await fetch(`${SERVER_HTTP_URL}/messages`);
    return response.json();
  }

  public static sendMessage(message) {
    ChatService.stompClient.send('/app/sendMessage', JSON.stringify(message));
  }
}
