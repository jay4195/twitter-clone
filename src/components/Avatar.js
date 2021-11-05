import React, { useContext } from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  height: 100%;
  padding: 1rem 0;
  z-index: 0;
  width: 30%;

  .profile-avatar {
    height: 100px;
    weight: 100px;
  }
  .border-white{
    border-color:blue;
    border-width:10px;
    border-style:solid;
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
            <img className = "profile-avatar round-border border-white" src = {props.url}/>
        </a>
    </AvatarWrapper>
  );
};

export default Avatar;
