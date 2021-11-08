import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (max-width: 1040px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BookMarks = () => {
  return (
    <Wrapper>
        <span>BookMarks</span>
    </Wrapper>
  );
};

export default BookMarks;
