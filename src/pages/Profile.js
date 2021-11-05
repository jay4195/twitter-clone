import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import TopNav from "../components/TopNav";
import Avatar from "../components/Avatar";
import Button from "../components/Button";

const Wrapper = styled.div`

  .main {
    width: 598px;
    height: 950px;
    border-color: rgb(239, 243, 244);
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  }

  .backgroud-pic {
    width: 100%;
    padding-bottom: 200px;
    background-color: rgb(207, 217, 222);
  }

  .profile-avatar {
    height: 131px;
    weight: 131px;
    margin-top: -13%;
    margin-left: 2%;
  }

  .avatar-border {
    border-color: white;
    border-width: 4px;
    border-style: solid;
  }

  .button-name {
    font-size: 15px;
    font-weight: 700;
  }

`;

const Profile = () => {

  const { username } = useParams();

  var caption = "1 Tweet";

  return (
    <Wrapper>
      <div className = "main">
        <TopNav name = {username} caption = {caption}/>
        <div className = "backgroud-pic">
        </div>
        <Avatar url="/default_profile_400x400.png"/>
        <Button name = "Edit profile" color = "white"></Button>
        <span> {username} </span>
      </div>
    </Wrapper>
  );
};

export default Profile;
