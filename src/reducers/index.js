import { CHANGE_MESSAGE, SEND_MESSAGE } from "../actions";

const initialState = {
  pseudo: 'Utilisateur anonyme',
  logged: false,
  userEmail: '',
  userPassword: '',
  loginOpen: true,
  messageInProgress: '',
  listOfMessages: [
    {
      id: 1,
      author: 'Super Chat',
      message: 'Salut ça va?',
    },
    {
      id: 2,
      author: 'Super Chat',
      message: 'T\'as pas des super-croquettes',
    },
    {
      id: 3,
      author: 'Super Chat',
      message: 'Stp',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        messageInProgress: action.newMessage,
      };
    case 'RECEIVE_MESSAGE':
      return { 
        ...state, 
        messageInProgress: '',
        listOfMessages: [
          ...state.listOfMessages,
          action.newMessage,
        ],
      };
    case 'TOGGLE_OPEN':
      return {
        ...state,
        loginOpen: !state.loginOpen,
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case 'SAVE_USER':
      return {
        ...state,
        userEmail: '',
        userPassword: '',
        logged: true,
        pseudo: action.pseudo,
        loading: false,
        errorMessage: '',
      };
    case 'LOGIN':
      return {
        ...state,
        loading: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        pseudo: 'Utilisateur anonyme',
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
