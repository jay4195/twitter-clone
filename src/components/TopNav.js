import React, { useState } from "react";
import styled from "styled-components";
import { LeftArrow } from "./Icons";

const NavWrapper = styled.div`

  .top-nav {
    width:598px;
    background:white;
    position:fixed;
    display: flex;
    align-items: center;
    height: 53px;
    border-color: rgb(239, 243, 244);
    border-style: solid;
    border-width: 0px 1px 1px 1px;
  }
  
  .top-nav-padding {
    display: flex;
    align-items: center;
    height: 53px;
    border-color: rgb(239, 243, 244);
    border-style: solid;
    border-width: 0px 0px 1px 0px;
  }

  .top-nav .arrow {
    padding:6px;
    line-height: 0;
  }

  .top-nav .arrow: hover {
    background: rgb(230,230,230);
  }

  .top-nav .username {
    font-weight: 700;
  }

  .top-nav .caption {
    font-size: 12px;
    font-weight: 400;
    color: rgb(83, 100, 113);
  }

  .profile-top {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
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

const TopNav = (props) => {

  const showNameList = ["Home", "Notifications", "Messages"];

  if (showNameList.indexOf(props.name) > -1) {
    return (
      <NavWrapper>
          <nav className = "top-nav">
              <h2 className = "top-name">
                  {props.name}
              </h2>
          </nav>
      </NavWrapper>
    );
  } else {
    return (
      <NavWrapper>
        <nav className = "top-nav">
            <span className = "arrow round-border">
              <LeftArrow height = "20" width = "20"/>
            </span>
            <div className = "profile-top">
              <span className = "username tall-font">
                {props.name}
              </span>
              <span className = "caption">
                {props.caption}
              </span>
            </div>
        </nav>
        <div className = "top-nav-padding"></div>
      </NavWrapper>
    );
  }
};

export default TopNav;
