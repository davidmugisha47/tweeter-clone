import React from "react";
import LandingPage from "./Components/LandingPage";
import { UserProvider } from "./Contexts/UserProvider";
import { TweetProvider } from "./Contexts/TweeteProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/Home";
import Profile from "./Components/Profile";
import EditTweet from "./Components/EditTweet";

function App() {
  return (
    <UserProvider>
      <TweetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/twitter" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/edit/:userId" element={<EditTweet /> } />
          </Routes>
        </BrowserRouter>
      </TweetProvider>
    </UserProvider>
  );
}

export default App;
