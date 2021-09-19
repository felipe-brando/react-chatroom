// == Import
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Settings from 'src/components/Settings';

import './style.scss';

// == Composant
const Chat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'WEBSOCKET_INIT',
    });
  }, []);
  return (
    <div className="chat">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

// == Export
export default Chat;
