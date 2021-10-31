import React, { useContext } from "react";
import styled from "styled-components";
import { MessageIcon, MoreIcon, NotificationIcon, ProfileIcon, SharpIcon, TwitterIcon } from "./Icons";

const NavWrapper = styled.div`
  position: fixed;
  left: 20px;
  height: 100%;
  padding: 1rem 0;
  z-index: 0;

  .twitter-logo {
    // position: relative;
    // top: 6px;
    // width: 100px;
  }

  nav {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    width: 930px;
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
            <div className = "twitter-logo" >
                <TwitterIcon/>
            </div>
            <div>
                <SharpIcon/>
            </div>
            <div>
            <NotificationIcon/>
            </div>
            <div>
            <MessageIcon/>
            </div>
            <div>
            <ProfileIcon/>
            </div>
            <div>
            <MoreIcon/>  
            </div>
      </nav>
    </NavWrapper>
  );
};

export default Nav;
