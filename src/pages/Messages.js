import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (max-width: 1040px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <Wrapper>
        <span>Messages</span>
    </Wrapper>
  );
};

export default Home;
