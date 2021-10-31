import React, { useContext } from "react";
import styled from "styled-components";
import { HomeIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon, SharpIcon, TwitterIcon } from "./Icons";

const NavWrapper = styled.div`
  position: fixed;
  left: 20px;
  height: 100%;
  padding: 1rem 0;
  z-index: 0;

  nav {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    width: 930px;
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

  return (
    <NavWrapper>
      <nav>
        <a href = "/home">
            <div class = "nav-section" >
                <TwitterIcon/>
            </div>
        </a>
        <a href = "/home">
            <div class = "nav-section">
                <HomeIcon/>
                <div class = "nav-name">
                    <span>Home</span>
                </div>
            </div>
        </a>
        <a href = "/explore">
            <div class = "nav-section">
                <SharpIcon/>
                <div class = "nav-name">
                    <span>Explore</span>
                </div>
            </div>
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
        {/* TODO 修改成用户的id */}
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
