let socket;
const websocketMiddleware = (store) => (next) => (action) => {
  if (action.type === 'WEBSOCKET_INIT') {
    socket = window.io('http://localhost:3001');
    socket.on('send_message', (data) => {
      console.log('le serveur a relayé des infos', data);
      store.dispatch({
        type: 'RECEIVE_MESSAGE',
        newMessage: data,
      });
    });
  }
  else if (action.type === 'SEND_MESSAGE') {
    const state = store.getState();
    console.log(state);
    socket.emit('send_message', {
      author: state.pseudo,
      message: state.messageInProgress,
    });
  }
  next(action);
};

export default websocketMiddleware;
