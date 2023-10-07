import axios from "axios";
import { useEffect, useState } from "react";
import TweetContext from "./TweetContext";

export const TweetProvider = (props) => {
  const [tweet, setTweets] = useState([]);
  const baseUrl = "http://localhost:3000/api/tweeter/";

  useEffect(() => {
    async function fetchData() {
      await getAllTweets();
    }
    fetchData();
  }, []);

  function getAllTweets() {
    return axios.get(baseUrl).then((response) => setTweets(response.data));
  }

  function getTweet(id) {
    return axios.get(baseUrl + id).then((response) => {
      return response.data;
    });
  }

  function addTweet(tweet) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myTweeterToken")}`,
    };

    return axios
      .post(baseUrl, tweet, { headers: myHeaders })
      .then((response) => {
        getAllTweets();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function editTweet(tweet) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myTweeterToken")}`,
    };

    return axios
      .put(baseUrl + tweet.id, tweet, { headers: myHeaders })
      .then((response) => {
        getAllTweets();
        return new Promise((resolve) => resolve(response.data));
      });
    }

    function deleteTweet(id) {
      let myHeaders = {
        Authorization: `Bearer ${localStorage.getItem("myTweeterToken")}`,
      };

    return axios
      .delete(baseUrl + id, { headers: myHeaders })
      .then((response) => {
        getAllTweets();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  return (
    <TweetContext.Provider
    value={{
        tweet,
        getAllTweets,
        getTweet,
        addTweet,
        editTweet,
        deleteTweet
    }}
    >
        {props.children}
    </TweetContext.Provider>
  )
};
