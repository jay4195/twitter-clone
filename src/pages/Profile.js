import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import TopNav from "../components/TopNav";

const Wrapper = styled.div`

  .main {
    width: 750px;
    height: 950px;
    border-color: rgb(239, 243, 244);
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  }

`;

const Profile = () => {

  const { username } = useParams();

  var caption = "1 Tweet";

  return (
    <Wrapper>
      <div className = "main">
        <TopNav name = {username} caption = {caption}/>
        <span> {username} </span>
      </div>
    </Wrapper>
  );
};

export default Profile;
