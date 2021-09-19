/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux';
// == Import
import Message from 'src/components/Message';
import { useEffect } from 'react';

import './style.scss';
// == Composant
// eslint-disable-next-line arrow-body-style
const Messages = () => {
  const messages = useSelector((state) => state.listOfMessages);
  useEffect(() => {
    const element = document.querySelector('.messages');
    element.scrollTo(0, element.scrollHeight);
  }, [messages]);
  return (
    <section className="messages">
      {messages.map((currentMessage) => (
        <Message
          key={currentMessage.id}
          author={currentMessage.author}
          text={currentMessage.message}
        />
      ))}
    </section>
  );
};
// == Export
export default Messages;
