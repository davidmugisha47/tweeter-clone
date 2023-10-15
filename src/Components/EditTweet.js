import { useContext, useEffect, useState } from "react";
import TweetContext from "../Contexts/TweetContext";
import UserContext from "../Contexts/UserContext";
import { Container, Row, Col, Stack, Button, Form } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginOutlined from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/Profile.css";
import "../Styles/EditTweet.css";

function EditTweet() {
  const { editTweet, getTweet} =
    useContext(TweetContext);

  const { signOutUser, CurrentLogin, getAllUsers } = useContext(UserContext);

  const [loggedInUser, setLoggedInUser] = useState("");

  let navigate = useNavigate();

  let params = useParams();

  const token = localStorage.getItem("mytweeterToken");

  const handleLogout = () => {
    signOutUser();
    navigate("/login");
  };

  const [tweett, setTweett] = useState({
    tweetid: params.userId,
    title: "",
    image: "",
  });

  let { tweetid, title, image } = tweett;

  function handleChange(event) {
    setTweett((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  useEffect(() => {
    if (tweetid === undefined) return;
    async function fetch() {
      await getTweet(tweetid).then((post) => {
        setTweett(post);
      });
      CurrentLogin(token)
        .then((user) => setLoggedInUser(user))
        .catch((error) => {
          console.log(error);
        });
      getAllUsers();
    }
    fetch();
  }, [tweetid, getTweet, CurrentLogin, getAllUsers]);

  function handleSubmit(event) {
    event.preventDefault();
    editTweet(tweett)
      .then(() => {
        window.alert("Update was successful!");
        navigate(`/twitter`);
      })
      .catch((error) => {
        console.log(error);
        window.alert("Update failed!");
        navigate("/twitter");
      });
  }

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
                    <a href="/twitter">Home</a>
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
                    <div key={loggedInUser.id} className="userProfile">
                      <img
                        key={loggedInUser.id}
                        src={loggedInUser.img}
                        className="rounded-image"
                      ></img>
                      <div className="userName">
                        <h6 key={loggedInUser.id}>
                          {loggedInUser.firstName} {loggedInUser.lastName}
                        </h6>
                        <p key={loggedInUser.id}>{loggedInUser.username}</p>
                      </div>
                      <div className="pMenu">
                        <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                      </div>
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
                    <h4>Edit tweet</h4>
                  </div>
                  <div style={{ marginTop: "79px" }}></div>
                  <div className="justSomeSpace">
                    <div className="form">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Title</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Image</Form.Label>
                          <Form.Control
                            type="text"
                            name="image"
                            value={image}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Save
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className="Space"></div>
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

export default EditTweet;
