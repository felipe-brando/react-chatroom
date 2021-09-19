import { X } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import LoginForm from './LoginForm';

const Settings = () => {
  const isOpen = useSelector((state) => state.loginOpen);
  const logged = useSelector((state) => state.logged);
  const pseudo = useSelector((state) => state.pseudo);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_OPEN',
    });
  };
  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  return (
    <div className={isOpen ? 'settings' : 'settings settings--hidden'}>
      <button onClick={handleClick} className="settings-toggler" type="button" aria-label="Ouvrir/Fermer">
        <X size="100%" />
      </button>
      {!logged && !loading && <LoginForm />}
      {!logged && loading && <p>Veuillez patienter</p>}
      {logged && (
        <p>
          Connecté en tant que {pseudo}
          <button onClick={handleLogout} type="button">Se déconnecter</button>
        </p>
      )}
    </div>
  );
};

export default Settings;
