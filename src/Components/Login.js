import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let { signInUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    signInUser(username, password)
      .then(() => {
        navigate("/twitter");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed login");
      });
  }

  return (
    <div className="container">
      <div className="cntnr">
        <div>
          <img
            src="https://www.businessofapps.com/wp-content/uploads/2023/07/twitter-x-e1690183153269.webp"
            alt="Xlogo"
            width="45px"
            height="30px"
          ></img>
        </div>
        <div className="frstP">
          <h3>Sign in to X</h3>
        </div>
        <div className="buttonOne">
          <button>
            <span>
              <img
                src="https://banner2.cleanpng.com/20180416/ppe/kisspng-g-suite-pearl-river-middle-school-google-docs-soft-google-plus-5ad4f155b36555.6827254815239048537348.jpg"
                alt="logo"
                width="28px"
                height="28px"
              ></img>
            </span>
            Sign up with Google{" "}
          </button>
        </div>
        <div className="buttonTwo">
          <button>
            <span>
              <img
                src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-preview.jpg"
                alt="logo"
                width="50px"
                height="30px"
              ></img>
            </span>
            Sign up with Apple{" "}
          </button>
        </div>
        <div className="oor">
          <span>
            <hr style={{ maxWidth: "120px" }} />
            <p>Or</p>
            <hr style={{ maxWidth: "120px" }} />
          </span>
        </div>
        <form onSubmit={handleSubmit}>
            <input
              className="inputOne"
              placeholder="Enter username"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              className="inputTwo"
              placeholder="Enter password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          <div className="buttonFour">
            <button>Sign in</button>
          </div>
        </form>
        <div className="buttonFive">
          <button>Forgot password?</button>
        </div>
        <div className="qwn">
          <p>Don't have an account? <a href="Sign up">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
