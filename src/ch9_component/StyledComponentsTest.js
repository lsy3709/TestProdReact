import React from "react";

import styled, { css } from "styled-components";

import { AiFillApple } from "react-icons/ai";

const StyledComponentsTest = () => {
  const Box = styled.div`
    background: ${(props) => props.color || "blue"};
    padding: 1rem;
    display: flex;
  `;

  const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }

    ${(props) =>
      props.test &&
      css`
        background: none;
        border: 2px solid white;
        color: green;
        &:hover {
          background: white;
          color: yello;
        }
      `}

    & + button {
      margin-left: 1rem;
    }
  `;

  return (
    <div>
      <h1>
        test react-icons <AiFillApple />
      </h1>
      <Box color="red">
        <Button test={true}>hello</Button>
      </Box>
      <Box>
        <Button>속성 안주기 </Button>
      </Box>
      <Box color="violet">
        <Button test={true}>속성 주기 </Button>
        <Button>속성 안주기 </Button>
      </Box>
    </div>
  );
};

export default StyledComponentsTest;
