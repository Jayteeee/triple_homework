import React from "react";
import styled from "styled-components";

const Description = () => {
  const counter = ($counter, max) => {
    let now = max;

    const handle = setInterval(() => {
      $counter.innerHTML = Math.ceil(max - now);

      if (now < 0) {
        clearInterval(handle);
      }

      const step = now / 20;

      now -= step;
    }, 20);
  };

  window.onload = () => {
    // 카운트를 적용시킬 요소
    const $counter1 = document.querySelector(".count1");
    const $counter2 = document.querySelector(".count2");
    const $counter3 = document.querySelector(".count3");

    // 목표 수치
    const max1 = 700;
    const max2 = 100;
    const max3 = 470;

    counter($counter1, max1);
    counter($counter2, max2);
    counter($counter3, max3);
  };
  return (
    <Container>
      <div className="section">
        <strong>
          <span className="count1">0</span>만 명
        </strong>
        의 여행자
      </div>
      <div className="section">
        <strong>
          <span className="count2">0</span>만 개
        </strong>
        의 여행 리뷰
      </div>
      <div className="section">
        <strong>
          <span className="count3">0</span>만 개
        </strong>
        의 여행 일정
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  .section {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
    color: rgb(58, 58, 58);
    font-family: sans-serif;
  }
`;

export default Description;
