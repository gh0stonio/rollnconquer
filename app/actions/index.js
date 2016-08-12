export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export function receiveMessage (message) {
  return { type: MESSAGE_RECEIVED, message };
}

export function sendMessage (message) {
  return { type: SEND_MESSAGE, message };
}
