import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const Breadcrumb = (props) => {
  const { primary } = props;
  // console.log("ini", primary);
  const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
  `;
  const Circle = styled.circle`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background: orange;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Title = styled.h1`
    font-size: 10px;
    color: orange;
    margin: 0 15px 0 15px;
  `;
  const SecondCircle = styled(Circle)`
  background: #fedebe;
  margin-left: 20px
  `
  return (
    <>
      <Wrapper>
        <Circle>1</Circle>
        <Title>Delivery</Title>
        <BiChevronRight color="orange" />
        <SecondCircle>2</SecondCircle>
        <Title>Payment</Title>
        <BiChevronRight color="orange" />
        <SecondCircle>3</SecondCircle>
        <Title>Finish</Title>
      </Wrapper>
    </>
  );
};

export default Breadcrumb;
