import React from 'react';
import SignIn from './Components/SignIn';
import { UserProvider } from './Contexts/UserProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <SignIn /> } />
          <Route path="/signin" element={ <SignIn /> } />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
