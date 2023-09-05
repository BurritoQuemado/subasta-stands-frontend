import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { 
  Home,
  WalletPage,
} from './pages'
import { Layout } from './components';
function App () {

  const [user_id, setUserId] = useState(sessionStorage.getItem("user_id") || '');
  const [logged, setLogged] = useState(sessionStorage.getItem("user_id") || true);

  const setLoggedIn = (logged, user_id) => {
    setLogged(logged);
    setUserId(user_id);
    sessionStorage.setItem("user_id", user_id);
    sessionStorage.setItem("logged", logged);
  }

  const logout = () => {
    setLogged(false);
    setUserId('')
    sessionStorage.setItem("user_id", null);
    sessionStorage.setItem("logged", null);
  }

  useEffect(() => {
    var current_user = sessionStorage.getItem("user_id");
    var current_logged = sessionStorage.getItem("logged");
    if(current_user !== null || current_logged !== null) {
      setLoggedIn(current_logged, current_user);
    }
  }, []);

  return (
    <Layout logged_in={logged} logout={logout}>
      <Routes>
        <Route path="/" element={ <Home logged_in={logged} /> } />
        <Route path="/billetera/:user_id" element={ <WalletPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;
