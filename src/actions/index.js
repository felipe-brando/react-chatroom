export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

export function changeMessage(newMessage) {
  return {
    type: CHANGE_MESSAGE,
    newMessage: newMessage,
  };
}

export const SEND_MESSAGE = 'SEND_MESSAGE';

export function sendMessage() {
  return {
    type: SEND_MESSAGE,
  };
}
