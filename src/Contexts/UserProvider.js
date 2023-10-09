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

    function createUser(username, password, firstName, lastName, img, bio) {       
        let user = { username, password, firstName, lastName, img, bio};
        
        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function signInUser(username, password) {
        let user = { username, password };

        return axios.post(`${baseUrl}login`, user)
            .then(response => {
                localStorage.setItem('mytweeterToken', response.data.token)
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function getAllUsers() {
        return axios.get(baseUrl).then((response) => setUsers(response.data))
    }

    function getUser(id) {
        return axios.get(baseUrl + id).then((response) => setUsers(response.data))
    }

    return (
        <UserContext.Provider value={{
            user,
            getAllUsers,
            getUser,
            createUser,
            signInUser
        }}>
            { props.children }
        </UserContext.Provider>
    )
}