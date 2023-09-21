import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { 
  Home,
  WalletPage,
  LoginPage,
  RegisterPage,
  WalletDescPage,
  GalleryPage,
  PeoplePage,
  PersonPage
} from './pages'
import { Layout } from './components';
function App () {
  

  const [user_id, setUserId] = useState(window.localStorage.getItem("user_id"));
  const [logged, setLogged] = useState(window.localStorage.getItem("logged"));

  const setLoggedIn = (logged, user_id) => {
    setLogged(logged);
    setUserId(user_id);
    window.localStorage.setItem("user_id", user_id);
    window.localStorage.setItem("logged", logged);
  }

  const logout = () => {
    setLogged(false);
    setUserId('')
    window.localStorage.setItem("user_id", null);
    window.localStorage.setItem("logged", null);
  }

  useEffect(() => {
    var current_user = window.localStorage.getItem("user_id");
    var current_logged = window.localStorage.getItem("logged");
    if(current_user !== null || current_logged !== null) {
      setLoggedIn(current_logged, current_user);
    }
  }, []);

  return (
    <Layout logged_in={logged} logout={logout}>
      <Routes>
        <Route path="/" element={ <Home logged_in={logged} user_id={user_id} /> } />
        <Route path="/cartera/:user_id" element={ <WalletPage /> } />
        <Route path='/login' element={ <LoginPage setLoggedIn={setLoggedIn} /> } />
        <Route path='/registro' element={ <RegisterPage /> } />
        <Route path='/cartera-desc' element={ <WalletDescPage user_id={user_id} />} />
        <Route path='/galeria-arte' element={ <GalleryPage /> } />
        <Route path='/galeria' element={ <PeoplePage /> } />
        <Route path='/galeria/:person_id' element={ <PersonPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;
