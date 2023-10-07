import React from 'react';
import SignIn from './Components/SignIn';
import { UserProvider } from './Contexts/UserProvider';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SignIn /> } />
          <Route path="login" element={ <Login/> } />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
