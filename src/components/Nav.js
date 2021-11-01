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

  .nav-logo {
    flex-direction: row;
    display: flex;
    padding: 12px;
  }

  .boarder {
    border-radius:9999px;
    transition-duration:0.2s;
  }

  .nav-logo: hover {
    background: rgb(29,155,240, 0.1);
  }

  .nav-section: hover {
    background: rgb(230,230,230);
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
        <div class = "nav-logo boarder" >
            <TwitterIcon/>
        </div>
      </a>
      <a href = "/" className = "nav-section boarder">
          <HomeIcon select={navId === 0}/>
          <div class = "nav-name">
              {navId === 0 && (<b>Home</b>)}
              {navId !== 0 && (<span >Home</span>)}
        </div>
      </a>
      <a href = "/explore">
        <div class = "nav-section boarder" >
            <SharpIcon select={navId === 1}/>
            <div class = "nav-name">
              {navId === 1 && (<b>Explore</b>)}
              {navId !== 1 && (<span >Explore</span>)}
            </div>
        </div>
      </a>
      <a href = "/notifications">
        <div class = "nav-section boarder">
            <NotificationIcon select={navId === 2}/>
            <div class = "nav-name">
                {navId === 2 && (<b>Notifications</b>)}
                {navId !== 2 && (<span >Notifications</span>)}
            </div>
        </div>
      </a>
      <a href = "/messages">
        <div class = "nav-section boarder">
            <MessageIcon select={navId === 3}/>
            <div class = "nav-name">
                {navId === 3 && (<b>Messages</b>)}
                {navId !== 3 && (<span >Messages</span>)}
            </div>
        </div>
      </a>
      <a href = "/profile">
        <div class = "nav-section boarder">
            <ProfileIcon select={navId === 4}/>
            <div class = "nav-name">
                {navId === 4 && (<b>Profile</b>)}
                {navId !== 4 && (<span >Profile</span>)}
            </div>
        </div>
      </a>
      <div class = "nav-section boarder">
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
