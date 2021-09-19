import PropTypes from 'prop-types';
// == Import
import './style.scss';
// == Composant
const Message = ({ author, text }) => (
  <article className="message">
    <p className="message-author">{author}</p>
    <pre className="message-content">{text}</pre>
  </article>
);
Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// == Export
export default Message;
