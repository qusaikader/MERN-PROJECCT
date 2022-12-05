import { useState, useEffect } from 'react';

import Login from './LoginPage';
import Home from './HomePage';
import firebase  from './AuthFirebase';
import './Auth.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div className="app">
      {user ? <Home user={user} /> : <Login/>}
    </div>
  );
}

export default Auth;
