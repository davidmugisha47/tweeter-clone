import react, { useContext, useEffect, useState } from "react";
import TweetContext from "../Contexts/TweetContext";
import UserContext from "../Contexts/UserContext";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VerifiedIcon from "@mui/icons-material/Verified";
import LoginOutlined from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useParams, Link } from "react-router-dom";
import "../Styles/Profile.css";

function Profile() {
  const { tweet, deleteTweet } = useContext(TweetContext);

  const { getUser, signOutUser, CurrentLogin } = useContext(UserContext);

  const [ getCurrentLogin, setCurrentLogin ] = useState();

  let params = useParams();

  let navigate = useParams();

  const DateTime = (dataTime) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return new Date(dataTime).toLocaleString(undefined, options);
  };

  let token = localStorage.getItem("mytweeterToken");

  const handleLogout = () => {
    signOutUser();
    navigate("/login");
  };

  const [userProfile, setUserProfile] = useState({
    id: params.userId,
    username: "",
    img: "",
    firstName: "",
    lastName: "",
    bio: "",
  });

  let { id, username, img, firstName, lastName, bio, createdAt } = userProfile;

  // const handleDelete = () => {
  //   deleteTweet(id)
  //     .then(() => {
  //       navigate("/profile");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       window.alert("We are having trouble deleting your post");
  //     });
  // };

  useEffect(() => {
    async function fetch() {
      await getUser(id).then((userProfile) => setUserProfile(userProfile));
    }
    CurrentLogin(token).then((user) => {
      setCurrentLogin(user);
  });

    fetch();
  }, []);

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
                    <a href="twitter">Home</a>
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
                  {token && (
                    <div className="profile">
                      <PersonOutlineIcon fontSize="large"></PersonOutlineIcon>
                      <a href="profile">Profile</a>
                    </div>
                  )}
                  {token ? (
                    <div className="signOut">
                      <LogoutOutlinedIcon fontSize="large"></LogoutOutlinedIcon>
                      <button className="logoutButton" onClick={handleLogout}>
                        Sign out
                      </button>
                    </div>
                  ) : (
                    <div className="signIn">
                      <LoginOutlined fontSize="large"></LoginOutlined>
                      <a href="login">Sign In</a>
                    </div>
                  )}
                  <div className="post">
                    <button>
                      <a href="login">Post</a>
                    </button>
                  </div>
                  {token && (
                    <div>
                      <UserContext.Consumer>
                        {({ user }) => {
                          return (
                            <div>
                              <div>
                                {user.map((u) => {
                                  return (
                                    <div key={u.id} className="userProfile">
                                      <img
                                        key={u.id}
                                        src={u.img}
                                        className="rounded-image"
                                      ></img>
                                      <div className="userName">
                                        <h6 key={u.id}>
                                          {u.firstName} {u.lastName}
                                        </h6>
                                        <p key={u.id}>{u.username}</p>
                                      </div>
                                      <div className="pMenu">
                                        <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        }}
                      </UserContext.Consumer>
                    </div>
                  )}
                </div>
              </Stack>
            </Col>
            <Col md={7}>
              <Stack direction="vertical" gap={3}>
                <div className="middle-container">
                  <div className="headingContainer">
                    <ArrowBackIcon></ArrowBackIcon>
                    <h4>
                      {firstName} {lastName}
                    </h4>
                  </div>
                  <div style={{ marginTop: "79px" }}></div>
                  <div className="space">
                    <div className="nothing">
                      <img className="crazy" src={img}></img>
                    </div>
                    <button className="editButton">Edit profile</button>
                    <div className="christian">
                      <h6>
                        {firstName} {lastName}
                      </h6>
                      <p>{username}</p>
                      <p>{bio}</p>
                      <p>
                        <DateRangeIcon fontSize="small"></DateRangeIcon> Joined
                        at {DateTime(createdAt)}
                      </p>
                      <div className="followingNum">
                        <p>0Following</p>
                        <p>Following0</p>
                      </div>
                      <div className="Links">
                        <p
                          style={{
                            borderBottom: "4px solid rgb(16, 143, 255)",
                            borderRadius: "2px",
                          }}
                        >
                          Posts
                        </p>
                        <p>Replies</p>
                        <p>Highlights</p>
                        <p>Media</p>
                        <p>Likes</p>
                      </div>
                    </div>
                  </div>
                  <div key={id} style={{ color: "white" }}>
                    {tweet.map((t) => {
                      console.log(tweet.userId, userProfile.userId);
                      if (t.userId === userProfile.userId) {
                        return (
                          <div key={t.Id} style={{ color: "white" }}>
                            <div className="themPosts">
                              <div className="themData">
                                <div className="tImage">
                                  <img
                                    key={id}
                                    src={img}
                                    className="rounded-image"
                                  ></img>
                                  <h6
                                    key={id}
                                    className="tweetOwner"
                                  >
                                    {firstName}{" "}
                                    {lastName}
                                    <VerifiedIcon fontSize="small"></VerifiedIcon>{" "}
                                    <p key={id}>
                                      <Link
                                        style={{
                                          textDecoration: "none",
                                          color: "white",
                                        }}
                                        to={`/profile/${t.Id}`}
                                      >
                                        {username}
                                      </Link>{" "}
                                      {DateTime(t.createdAt)}
                                    </p>
                                  </h6>
                                </div>
                                <div className="tweetBody">
                                  <p>{t.title}</p>
                                  <img
                                    src={t.image}
                                    height="auto"
                                    width="520px"
                                    style={{ borderRadius: "8px" }}
                                  ></img>
                                </div>
                               <div>
                                {getCurrentLogin && getCurrentLogin.userId === userProfile.userId && (
                                  <div>
                                  <Button variant="outline-danger">Delete</Button>
                                  <Link className="btn btn-outline-primary" to={`/edit/${getCurrentLogin.userId}`}>Edit</Link>
                                  </div>
                                )}
                               </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
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
}

export default Profile;
