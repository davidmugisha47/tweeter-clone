import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {
  const [user, setUsers] = useState([]);
  const baseUrl = "http://localhost:3000/api/users/";

  useEffect(() => {
    async function fetchData() {
      await getAllUsers();
    }
    fetchData();
  }, []);

  let token = localStorage.getItem("mytweeterToken");

  function createUser(username, password, firstName, lastName, img, bio) {
    let user = { username, password, firstName, lastName, img, bio };

    return axios.post(baseUrl, user).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(`${baseUrl}login`, user).then((response) => {
      localStorage.setItem("mytweeterToken", response.data.token);
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signOutUser() {
    localStorage.removeItem("mytweeterToken");
  }

  function getAllUsers() {
    return axios.get(baseUrl).then((response) => setUsers(response.data));
  }

  function getUser(id) {
    return axios.get(baseUrl + id).then((response) => {
      return response.data;
    });
  }

  function CurrentLogin(myToken) {
    return new Promise((resolve, reject) => {
      if (token && token === myToken) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        axios
          .get(baseUrl + "currentLogin", { headers })
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject("User not authenticated");
      }
    });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        CurrentLogin,
        getAllUsers,
        getUser,
        createUser,
        signInUser,
        signOutUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
