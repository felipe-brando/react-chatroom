import axios from 'axios';

const APIMiddleware = (store) => (next) => (action) => {
  if (action.type === 'LOGIN') {
    const state = store.getState();
    axios.post('http://localhost:3001/login', { // je fais l'appel api
      email: state.userEmail,
      password: state.userPassword,
    })
      .then((response) => {
        console.log('succès', response.data.pseudo);
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: response.data.pseudo,
        });
      })
      .catch((error) => {
        store.dispatch({
          type: 'LOGIN_ERROR',
          message: 'Mauvais identifiant / mot de passe',
        });
      });
  }
  next(action);
};

export default APIMiddleware;
