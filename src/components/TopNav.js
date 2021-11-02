import React, { useState } from "react";
import styled from "styled-components";

const NavWrapper = styled.div`

  .top-nav {
    display: flex;
    align-items: center;
    height: 53px;
    border-color: rgb(239, 243, 244);
    border-style: solid;
    border-width: 0px 0px 1px 0px;
  }

  .top-nav .top-name {
    padding-left: 16px;
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

  return (
    <NavWrapper>
        <nav className = "top-nav">
            <h2 className = "top-name">
                {props.name}
            </h2>
        </nav>
    </NavWrapper>
  );
};

export default TopNav;
