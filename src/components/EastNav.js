import React, { useContext } from "react";
import styled from "styled-components";
import { HomeIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon, SharpIcon, TwitterIcon } from "./Icons";

const NavWrapper = styled.div`
  height: 100%;
  padding: 1rem 0;
  z-index: 0;
  width: 30%;
  nav {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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

const EastNav = () => {
  return (
    <NavWrapper>
      <nav>
        <span>
          You might like
        </span>
        <span>
        What's happening
        </span>
      </nav>
    </NavWrapper>
  );
};

export default EastNav;
