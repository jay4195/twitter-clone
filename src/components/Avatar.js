import React, { useContext } from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
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

const Avatar = (props) => {
  return (
    <AvatarWrapper>
        <a href = {props.url}>
            
        </a>
    </AvatarWrapper>
  );
};

export default Avatar;
