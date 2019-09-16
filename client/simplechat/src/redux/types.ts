export interface OutgoingMessage {
    username: string;
    text: string;
}

export interface IncomingMessage {
    id: number;
    username: string;
    text: string;
    date: Date;
}

export interface ChatState {
    connected: Boolean,
    username: string,
    messages: IncomingMessage[],
}

export const CONNECT_REQUESTED = 'CONNECT_REQUESTED';
export const CONNECT_SUCCEEDED = 'CONNECT_SUCCEEDED';
export const MESSAGE_SEND = 'MESSAGE_SEND';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const MESSAGE_GET_ALL = 'MESSAGE_GET_ALL';
export const MESSAGE_GET_ALL_SUCCEEDED = 'MESSAGE_GET_ALL_SUCCEEDED';

export interface ConnectRequestedAction {
    type: typeof CONNECT_REQUESTED;
    payload: { username: string };
}

interface ConnectSucceededAction {
    type: typeof CONNECT_SUCCEEDED;
    payload: { username: string };
}

export interface MessageSendAction {
    type: typeof MESSAGE_SEND;
    payload: { message: OutgoingMessage };
}

interface MessageReceivedAction {
    type: typeof MESSAGE_RECEIVED;
    payload: { message: IncomingMessage };
}

interface MessageGetAllSucceededAction {
    type: typeof MESSAGE_GET_ALL_SUCCEEDED;
    payload: { messages: IncomingMessage[] };
}

export type ChatActionTypes = ConnectSucceededAction | MessageReceivedAction | MessageGetAllSucceededAction;
