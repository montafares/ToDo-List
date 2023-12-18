import HomePage from "./components/HomePage";
import "./App.css";
import HeroImage from "./Images/back.png";
import styled from "@emotion/styled";
function App() {
  const Wrapper = styled.div`
    display: flex;
  `;
  const Img = styled.img`
    height: 800px;
    margin-left: 90px;
  `;
  return (
      <Wrapper>
         <HomePage/>
        <Img src={HeroImage} alt="img" className="img" />
      </Wrapper>
  );
}

export default App;
