import React from "react";
import SignIn from "./Components/SignIn";
import { UserProvider } from "./Contexts/UserProvider";
import { TweetProvider } from "./Contexts/TweeteProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/Home";

function App() {
  return (
    <UserProvider>
      <TweetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="twitter" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </TweetProvider>
    </UserProvider>
  );
}

export default App;
