import "./App.css";

//라이브러리
import styled, { keyframes } from "styled-components";

//컴포넌트
import LeftBox from "../components/LeftBox";
import Description from "../components/Description";
import Awards from "../components/Awards";

function App() {
  return (
    <Box className="App">
      <Container>
        <div className="first">
          <LeftBox></LeftBox>
        </div>
        <div className="second">
          <Description></Description>
        </div>
        <div className="third">
          <Awards></Awards>
        </div>
      </Container>
    </Box>
  );
}

const Box = styled.section`
  position: relative;
  overflow: hidden;
  background-image: inherit;
  background-repeat: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  background-size: cover;
  background-position: center center;
  min-width: 1200px;
`;
const text1 = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const Container = styled.div`
  width: 1040px;
  height: auto;
  margin: 0px auto;
  position: relative;
  .first {
    animation: ${text1} 700ms;
  }
  .second {
    animation: ${text1} 700ms 100ms;
  }
  .third {
    animation: ${text1} 700ms 200ms;
  }
`;

export default App;
