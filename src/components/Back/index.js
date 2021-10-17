import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

const Back = (props) => {
    const {title} = props;
  const Wrapper = styled.section`
    display: flex;
    align-items: center;
    margin: 30px;
  `;
  const Title = styled.h1`
    font-size: 10px;
    margin-left: 10px;
  `;
  return (
    <>
      <Wrapper>
        <BiArrowBack />
        <Title>{title}</Title>
      </Wrapper>
    </>
  );
};

export default Back;
