import React from "react";
import styled from "styled-components";
import triple from "../shared/images/triple2x.png";

const LeftBox = () => {
  return <Container>2021년 12월 기준</Container>;
};

const Container = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url(${triple});
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`;

export default LeftBox;
