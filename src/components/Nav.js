import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { HomeIcon, HomeIconSelected, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon, SharpIcon, SharpIconSelected, TwitterIcon } from "./Icons";

const NavWrapper = styled.div`
  left: 20px;
  width: 40%;
  height: 100%;
  padding: 1rem 0;
  z-index: 0;

  nav {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    padding-left: 200px;
  }

  .nav-section {
    flex-direction: row;
    display: flex;
    padding: 8px;
  }

  .nav-logo {
    flex-direction: row;
    display: flex;
    padding: 12px;
  }

  .boarder {
    margin: 5px;
  }

  .nav-logo: hover {
    background: rgb(29,155,240, 0.1);
  }

  .nav-section: hover {
    background: rgb(230,230,230);
  }

  .nav-section .nav-name {
    margin-left: 20px;
  }

  @media screen and (max-width: 970px) {
    nav {
      width: 90%;
    }
  }

  @media screen and (max-width: 670px) {
    input {
      display: none;
    }
  }
`;

const Nav = () => {
  const [navId, setNavId] = useState(0);
  const history = useHistory();

  var start = history.location.pathname.split("/").filter(item => item != '')[0];

  var tabId = 0;
  if (start === undefined || start === "home") {
    tabId = 0;
  } else if (start === "explore") {
    tabId = 1;
  } else if (start === "notifications") {
    tabId = 2;
  } else if (start === "messages") {
    tabId = 3;
  } else if (start !== "") {
    tabId = 4;
  }

  if (tabId !== navId) {
    setNavId(tabId);
  }

  return (
  <NavWrapper>
    <nav>
      <a href = "/">
        <div className = "nav-logo boarder round-border" >
            <TwitterIcon height="2rem"/>
        </div>
      </a>
      <a href = "/" className = "nav-section boarder round-border">
          <HomeIcon select={navId === 0} height="1.75rem"/>
          <div className = "nav-name tall-font">
              {navId === 0 && (<b>Home</b>)}
              {navId !== 0 && (<span >Home</span>)}
        </div>
      </a>
      <a href = "/explore">
        <div className = "nav-section boarder round-border" >
            <SharpIcon select={navId === 1} height="1.75rem"/>
            <div className = "nav-name tall-font tall-font">
              {navId === 1 && (<b>Explore</b>)}
              {navId !== 1 && (<span >Explore</span>)}
            </div>
        </div>
      </a>
      <a href = "/notifications">
        <div className = "nav-section boarder round-border">
            <NotificationIcon select={navId === 2} height="1.75rem"/>
            <div className = "nav-name tall-font">
                {navId === 2 && (<b>Notifications</b>)}
                {navId !== 2 && (<span >Notifications</span>)}
            </div>
        </div>
      </a>
      <a href = "/messages">
        <div className = "nav-section boarder round-border">
            <MessageIcon select={navId === 3} height="1.75rem"/>
            <div className = "nav-name tall-font">
                {navId === 3 && (<b>Messages</b>)}
                {navId !== 3 && (<span >Messages</span>)}
            </div>
        </div>
      </a>
      <a href = "/profile">
        <div className = "nav-section boarder round-border">
            <ProfileIcon select={navId === 4} height="1.75rem"/>
            <div className = "nav-name tall-font">
                {navId === 4 && (<b>Profile</b>)}
                {navId !== 4 && (<span >Profile</span>)}
            </div>
        </div>
      </a>
      <div className = "nav-section boarder round-border">
        <MoreIcon height="1.75rem"/>
        <div className = "nav-name tall-font">
            <span>More</span>
        </div>  
      </div>
    </nav>
  </NavWrapper>
  );
};

export default Nav;
