import Eclipse1 from "../Images/Ellipse 1.png";
import Eclipse2 from "../Images/Ellipse 2.png";
import Eclipse3 from "../Images/Ellipse 3.png";
import Eclipse4 from "../Images/Ellipse 4.png";
import {Wrapper,Title,Button,Eclipse,  } from "./Style.js";
import { useNavigate} from 'react-router-dom';
export const HomePage = () => {
const navigate = useNavigate();
function handleClick() {
  navigate('/add-todo');
  }
  function Display() {
    navigate('/display-list');
    }
return (

<Wrapper className="App" >
<Eclipse
          src={Eclipse1} alt="alt" bottom="bottom"
          width="width"height="height" />
          <Title>Shoping List</Title>
            <Button onClick={handleClick}>Add List</Button>
            <Button onClick={Display}>Display List</Button>
          <Eclipse src={Eclipse4} alt="alt" />
            <Eclipse src={Eclipse3} alt="alt" />
            <Eclipse src={Eclipse2} alt="alt" />
          </Wrapper>

)

}
export default HomePage;
