import Todolist from "./components/Todolist";
import HomePage from "./components/HomePage";
import "./App.css";
import HeroImage from "./Images/back.png";
import styled from "@emotion/styled";
import Provider from "./contexts/Reducers.js";
function App() {
  const Wrapper = styled.div`
    display: flex;
  `;
  const Img = styled.img`
    height: 800px;
    margin-left: 90px;
  `;
  return (
    <Provider>
      <Wrapper>
                <Todolist/>
                <HomePage/>
        <Img src={HeroImage} alt="img" className="img" />
      </Wrapper>
      </Provider>
  );
}

export default App;
