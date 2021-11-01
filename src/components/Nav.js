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
    padding: 12px;
  }

  .nav-section .nav-name {
    margin-left: 20px;
    font-size: 16px;
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
  } else if (start === "nofications") {
    tabId = 2;
  } else if (start === "messages") {
    tabId = 3;
  } else {
    tabId = 4;
  }

  if (tabId !== navId) {
    setNavId(tabId);
  }

  return (
  <NavWrapper>
    <nav>
      <a href = "/">
        <div class = "nav-section" >
            <TwitterIcon/>
        </div>
      </a>
      <a href = "/home">
        <div class = "nav-section">
          <HomeIcon select={navId === 0}/>
          <div class = "nav-name">
              {navId === 0 && (<b>Home</b>)}
              {navId !== 0 && (<span >Home</span>)}
          </div>
        </div>
      </a>
      <a href = "/explore">
        {navId === 1 && (
        <div class = "nav-section" >
            <SharpIconSelected/>
            <div class = "nav-name">
                <b>Explore</b>
            </div>
        </div>)}
        {navId !== 1 &&(
        <div class = "nav-section">
            <SharpIcon/>
            <div class = "nav-name">
                <span>Explore</span>
            </div>
        </div>)}
      </a>
      <a href = "/notifications">
        <div class = "nav-section">

            <NotificationIcon/>
            <div class = "nav-name">
                <span>Notifications</span>
            </div>
        </div>
      </a>
      <a href = "/messages">
        <div class = "nav-section">
            <MessageIcon/>
            <div class = "nav-name">
                <span>Messages</span>
            </div>
        </div>
      </a>
      <a href = "/profile">
        <div class = "nav-section">
            <ProfileIcon/>
            <div class = "nav-name">
                <span>Profile</span>
            </div>
        </div>
      </a>
      <div class = "nav-section">
        <MoreIcon/>
        <div class = "nav-name">
            <span>More</span>
        </div>  
      </div>
    </nav>
  </NavWrapper>
  );
};

export default Nav;
