import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import TopNav from "../components/TopNav";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { BalloonIcon, CalendarIcon, LocationIcon } from "../components/Icons";

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
    margin-top: -60%;
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

  .edit-profile-btn {
    margin-top: 1%;
  }

  .edit-profile-tab {
    display: flex;
    justify-content: space-between;
  }

  .basic-info {
    display: flex;
    align-items: center;
  }

  .basic-info .svg {
    margin-right: 4px;
  }

  .basic-info .tab {
    margin-right: 12px;
  }

  .following {
    margin-right: 20px;
  }

  .follow-tab .number {
    margin-right: 4px;
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
          <div className = "edit-profile-tab default-side">
            <Avatar url="/default_profile_400x400.png"/>
            <div className = "edit-profile-btn">
              <Button name = "Edit profile" color = "white"></Button>
            </div>
          </div>
          <div className = "line-space">
            <span className="bold-font default-side line-space tall-font"> {username} </span>
            <div className="default-side twitter-grey line-space"> @{username} </div>
            <div className="default-side line-space"> caption </div>
            <div className="basic-info default-side line-space">
              <LocationIcon className = "fill-color twitter-grey svg" height = "1.25em"/>
              <span className="twitter-grey tab">Beijing, China</span>
              <BalloonIcon className = "fill-color twitter-grey svg" height = "1.25em"/>
              <span className="twitter-grey tab">Born March 27, 1995</span>
              <CalendarIcon className = "fill-color twitter-grey svg" height = "1.25em"/>
              <span className="twitter-grey tab">Joined August 2018</span>
            </div>
            <div className="default-side follow-tab">
              <b className="number">0</b>
              <span className="twitter-grey following">Following</span>
              <b className="number">0</b>
              <span className="twitter-grey">Followers</span>
            </div>
          </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
