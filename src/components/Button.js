import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    .plain-button {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        background-color:transparent;
        padding: 5px 10px 5px 10px;
    }
`;

const Button = (props) => {
  return (
    <ButtonWrapper>
        <button className = "plain-button button-border round-border">
            <span className = "button-name">
                {props.name}
            </span>
        </button>
    </ButtonWrapper>
  );
};

export default Button;
