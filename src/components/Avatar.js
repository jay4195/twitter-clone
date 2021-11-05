import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`

`;

const Avatar = (props) => {
  return (
    <AvatarWrapper>
        <a href = {props.url}>
            <img className = "profile-avatar round-border avatar-border" src = {props.url}/>
        </a>
    </AvatarWrapper>
  );
};

export default Avatar;
