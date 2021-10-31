import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  .profile-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.4rem 0;
  }

  .profile-tab div {
    display: flex;
    cursor: pointer;
    margin-right: 3rem;
  }

  .loader {
    display: flex;
    justify-content: center;
  }

  .infinite-scroll-wrapper {
    object-fit: fill;
  }

  .profile-tab span {
    padding-left: 0.3rem;
  }

  .profile-tab svg {
    height: 24px;
    width: 24px;
  }

  .end-message {
    color: rgba(var(--f52,142,142,142),1);
  }

  hr {
    border: 0.5px solid ${(props) => props.theme.borderColor};
  }

`;

const Profile = () => {

  const { username } = useParams();

  return (
    <Wrapper>
        <span>{username}</span>
    </Wrapper>
  );
};

export default Profile;
