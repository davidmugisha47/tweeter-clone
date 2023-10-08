import React from "react";
import TweetContext from "../Contexts/TweetContext";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "../Styles/Home.css";

const HomePage = () => {
  return (
    <>
      <TweetContext.Consumer>
        {
          ({ tweet }) => {
          return 
      <div>
        <Container>
          <Row>
            <Col md={3}>
              <Stack direction="vertical" gap={3}>
                <div className="logo">
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
                <button><a href="signup">Post</a></button>
                </div>
                <div>
                  {tweet.map((t)) }
                </div>
              </Stack>
            </Col>
            {/* <Col md={6}>
              <Stack direction="vertical" gap={3}></Stack>
            </Col>
            <Col md={3}>
              <Stack direction="vertical" gap={3}></Stack>
            </Col> */}
          </Row>
        </Container>
      </div>
      }}
      </TweetContext.Consumer>
    </>
  );
};

export default HomePage;
