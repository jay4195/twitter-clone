import styled from "styled-components";

const Container = styled.div`
  width: 930px;
  height: 930px;

  margin-bottom: 4rem;
  flex-grow: 1;
  align-items: flex-end;

  @media screen and (max-width: 930px) {
    width: 90%;
  }

  @media screen and (max-width: 800px) {
    width: 95%;
  }

  @media screen and (max-width: 530px) {
    font-size: 0.9rem;
  }
`;

export default Container;
