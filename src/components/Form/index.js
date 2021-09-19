import { useSelector, useDispatch } from 'react-redux';
import { Send } from 'react-feather';
import { CHANGE_MESSAGE, SEND_MESSAGE } from '../../actions';

import './style.scss';
// == Composant
// eslint-disable-next-line arrow-body-style
const Form = () => {
  const messageInProgress = useSelector((state) => state.messageInProgress);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({
      type: CHANGE_MESSAGE,
      newMessage: event.target.value,
    });
  };

  const sendMessage = () => {
    if (messageInProgress.trim().length > 0) {
      dispatch({
        type: SEND_MESSAGE,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyup = (event) => {
    if (event.code === 'Enter' && !event.shiftKey) {
      sendMessage();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      {/* <input onChange={handleChange} className="form-input" type="text" value={messageInProgress} /> */}
      <textarea
        onChange={handleChange}
        className="form-input"
        type="text"
        value={messageInProgress}
        onKeyUp={handleKeyup}
        placeholder="Saisissez votre message..."
      />
      <button className="form-btn" type="submit">
        <Send color="#4992C3" />
      </button>
    </form>
  );
};

// == Export
export default Form;
