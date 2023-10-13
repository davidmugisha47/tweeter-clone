import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { Container } from "react-bootstrap";
import "../Styles/SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");

  let { createUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    createUser(username, password, firstName, lastName, img, bio)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed registration: error creating user");
      });
  }

  return (
    <Container >
    //   <div className="box">
        <div className="cnt">
          <div className="tlogo">
            <img
              src="https://www.businessofapps.com/wp-content/uploads/2023/07/twitter-x-e1690183153269.webp"
              alt="Xlogo"
              width="70px"
              height="50px"
            ></img>
          </div>
          <h2 style={{ fontFamily: "sans-serif" }}>
            Join our large community
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              className="inputs"
              placeholder="First name"
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              className="inputs"
              placeholder="Last name"
              type="text"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <input
              className="inputs"
              placeholder="Username"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              className="inputs"
              placeholder="Profile Image"
              type="text"
              name="img"
              onChange={(e) => setImg(e.target.value)}
            ></input>
            <input
              className="inputs"
              placeholder="bio"
              type="text"
              name="bio"
              onChange={(e) => setBio(e.target.value)}
            ></input>
            <input
              className="inputs"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="buttonSix">
              <button>Create account</button>
              <p className="stext">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
            </div>
          </form>
        </div>
    //   </div>
    </Container>
  );
};

export default SignUp;
