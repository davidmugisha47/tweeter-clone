import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TweetContext from "../Contexts/TweetContext";
import { Container, Row, Col, Stack } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PhotoIcon from "@mui/icons-material/Photo";
import GifBoxIcon from "@mui/icons-material/GifBox";
import ListIcon from "@mui/icons-material/List";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import "../Styles/Home.css";
import UserContext from "../Contexts/UserContext";

const HomePage = () => {
  const { signOutUser, user } = useContext(UserContext);

  const { tweet } = useContext(TweetContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser();
    navigate("/login");
  };
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Container>
          <Row>
            <Col md={2}>
              <Stack direction="vertical" gap={3}>
                <div className="left-container">
                  <div className="log">
                    <img
                      src="https://www.businessofapps.com/wp-content/uploads/2023/07/twitter-x-e1690183153269.webp"
                      alt="twitter logo"
                      height="30px"
                      width="55px"
                    ></img>
                  </div>
                  <div className="home">
                    <HomeIcon fontSize="large"></HomeIcon>
                    <p>Home</p>
                  </div>
                  <div className="search">
                    <SearchIcon fontSize="large"></SearchIcon>
                    <p>Search</p>
                  </div>
                  <div className="notification">
                    <NotificationsIcon fontSize="large"></NotificationsIcon>
                    <p>Notifications</p>
                  </div>
                  <div className="message">
                    <MailOutlineIcon fontSize="large"></MailOutlineIcon>
                    <p>Messages</p>
                  </div>
                  <div className="list">
                    <ListAltIcon fontSize="large"></ListAltIcon>
                    <p>Lists</p>
                  </div>
                  <div className="communities">
                    <GroupIcon fontSize="large"></GroupIcon>
                    <p>Communities</p>
                  </div>
                  <div className="premium">
                    <img
                      src="https://www.businessofapps.com/wp-content/uploads/2023/07/twitter-x-e1690183153269.webp"
                      alt="twitter logo"
                      height="25px"
                      width="45px"
                      style={{ marginTop: "4px" }}
                    ></img>
                    <p>Premium</p>
                  </div>
                  <div className="profile">
                    <PersonOutlineIcon fontSize="large"></PersonOutlineIcon>
                    <p>Profile</p>
                  </div>
                  <div className="more">
                    <MoreHorizIcon fontSize="large"></MoreHorizIcon>
                    <p>More</p>
                  </div>
                  <div className="post">
                    <button>
                      <a href="signup">Post</a>
                    </button>
                  </div>
                  <div className="userProfile">
                    <img
                      src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="rounded-image"
                    ></img>
                    <div className="userName">
                      <h6>David Mugisha</h6>
                      <p>@davidmugisha</p>
                    </div>
                    <div className="pMenu">
                      <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                    </div>
                  </div>
                </div>
              </Stack>
            </Col>
            <Col md={7}>
              <Stack direction="vertical" gap={3}>
                <div className="middle-container">
                  <div className="navContainer">
                    <h4>Home</h4>
                    <div className="following">
                      <p className="forYou">For you</p>
                      <p>Following</p>
                      <button className="logoutButton" onClick={handleLogout}>
                        Sign out
                      </button>
                    </div>
                  </div>
                  <div className="postContainer">
                    <div className="what">
                      <div className="tImage">
                        <img
                          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="rounded-image"
                        ></img>
                      </div>
                      <div className="input-container">
                        <form>
                          <input placeholder="What is happening?!"></input>
                          <div className="low">
                            <PhotoIcon
                              fontSize="small"
                              style={{ marginRight: "20px" }}
                            ></PhotoIcon>
                            <GifBoxIcon
                              fontSize="small"
                              style={{ marginRight: "20px" }}
                            ></GifBoxIcon>
                            <ListIcon
                              fontSize="small"
                              style={{ marginRight: "20px" }}
                            ></ListIcon>
                            <InsertEmoticonIcon
                              fontSize="small"
                              style={{ marginRight: "20px" }}
                            ></InsertEmoticonIcon>
                            <InsertInvitationIcon
                              fontSize="small"
                              style={{ marginRight: "20px" }}
                            ></InsertInvitationIcon>
                            <LocationOnIcon
                              fontSize="small"
                              style={{ marginRight: "20px" }}
                            ></LocationOnIcon>
                            <button className="thPost">Post</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <TweetContext.Consumer>
                    {({ tweet }) => {
                      return (
                        <div>
                          {console.log(tweet)}
                          <div>
                            {tweet.map((tweet) => {
                              const matchingUser = user.find(
                                (u) => u.userId === tweet.userId
                              );
                              if (matchingUser) {
                                return (
                                  <div className="themPosts">
                                    <div className="themData">
                                      <div className="tImage">
                                        <img
                                          key={matchingUser.userId}
                                          src={matchingUser.img}
                                          className="rounded-image"
                                        ></img>
                                        <h6
                                          key={matchingUser.userId}
                                          className="tweetOwner"
                                        >
                                          {matchingUser.firstName}{" "}
                                          {matchingUser.lastName}
                                          <VerifiedIcon fontSize="small"></VerifiedIcon>{" "}
                                          <p key={matchingUser.userId}>
                                            {" "}
                                            {matchingUser.username}
                                          </p>
                                        </h6>
                                      </div>
                                      <div className="tweetBody">
                                        <p>{tweet.title}</p>
                                        <img
                                          src={tweet.image}
                                          height="auto"
                                          width="520px"
                                          style={{ borderRadius: "8px" }}
                                        ></img>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      );
                    }}
                  </TweetContext.Consumer>
                </div>
              </Stack>
            </Col>
            <Col md={2}>
              <Stack direction="vertical" gap={4}></Stack>
              <div className="rightContainer">
                <div className="searchForm">
                  <form>
                    <input
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                  </form>
                </div>
                <div className="subP">
                  <h6>Subscribe to premium</h6>
                  <p>
                    Subscribe to unlock new features and if eligible, receive a
                    share of ads revenue.
                  </p>
                  <button className="subscribeBtn">Subscribe</button>
                </div>
                <div className="trending">
                  <h4>Trends for you</h4>
                  <p className="it">
                    News trending{" "}
                    <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                  </p>
                  <h6>React</h6>
                  <p>3.5M posts</p>
                  <p className="it">
                    News trending{" "}
                    <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                  </p>
                  <h6>Express</h6>
                  <p>3.5M posts</p>
                  <p className="it">
                    News trending{" "}
                    <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                  </p>
                  <h6>Node.js</h6>
                  <p>3.5M posts</p>
                  <p className="it">
                    News trending{" "}
                    <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                  </p>
                  <h6>Full-stack</h6>
                  <p>3.5M posts</p>
                  <p className="it">
                    News trending{" "}
                    <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                  </p>
                  <h6>Twitter</h6>
                  <p>3.5M posts</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
