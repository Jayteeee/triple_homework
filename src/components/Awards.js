import React from "react";
import styled from "styled-components";
import Google from "../shared/images/play-store2x.png";
import Apple from "../shared/images/badge-apple4x.png";

const Awards = () => {
  return (
    <Container>
      <div className="Badge Google">
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </div>
      <div className="Badge Apple">
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  .Badge {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
    display: inline-block;
    font-family: sans-serif;
    background-position: left top;
    background-repeat: no-repeat;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
  }
  .Google {
    background-image: url(${Google});
  }
  .Apple {
    background-image: url(${Apple});
  }
`;

export default Awards;
