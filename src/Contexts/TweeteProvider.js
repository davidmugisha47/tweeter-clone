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
      Authorization: `Bearer ${localStorage.getItem("mytweeterToken")}`,
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
      Authorization: `Bearer ${localStorage.getItem("mytweeterToken")}`,
    };

    return axios
      .put(baseUrl + tweet.tweetId, tweet, { headers: myHeaders })
      .then((response) => {
        getAllTweets();
        return new Promise((resolve) => resolve(response.data));
      });
    }

    function deleteTweet(tweetId) {
      let myHeaders = {
        Authorization: `Bearer ${localStorage.getItem("mytweeterToken")}`,
      };
    
      return axios
        .delete(baseUrl + tweetId, { headers: myHeaders })
        .then(() => {
          getAllTweets();
        })
        .catch((error) => {
          console.error("Error deleting tweet:", error);
          throw error;
        });
    }
    

  function getTweetsByUserId(userId) {
    return axios
    .get( `${baseUrl}user/${userId}` )
    .then((response) => {
      return response.data;
    })
    .catch((error) =>{
      console.log('We are having trouble looding the data', error);
      throw error;
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
        deleteTweet,
        getTweetsByUserId
    }}
    >
        {props.children}
    </TweetContext.Provider>
  )
};
