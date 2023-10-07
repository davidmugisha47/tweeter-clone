import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

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
        <>
          <div></div>  
        </>
    )
}