import { React, useState, useContext } from "react";
import { useTodo } from "../contexts/Reducers.js";
import Eclipse1 from "../Images/Ellipse 1.png";
import Eclipse2 from "../Images/Ellipse 2.png";
import Eclipse3 from "../Images/Ellipse 3.png";
// import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Eclipse4 from "../Images/Ellipse 4.png";
import { TodoListContext } from "../contexts/Reducers.js";
import {
  Wrapper,
  Title,
  Container,
  Eclipse,
  Index,
  Displaylist,
  Calend,
  Tap,
} from "./Style.js";
const DisplayToDo = () => {
  // const [futureTodos, setFutureTodos] = useState([]);
  // const [pastTodos, setPastTodos] = useState([]);
  const { tasks, dispatch } = useContext(TodoListContext);

  const [myArray, setMyArray] = useState(JSON.parse(localStorage.getItem("todos")))
  // console.log(myArray);
  const current = new Date();
  const nowDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  myArray.map((todoS, index) => {
    console.log(todoS.date);
  });
  const handletap = () => {
    setMyArray(JSON.parse(localStorage.getItem("todos")).filter(
        (todoS, index) => new Date(`${todoS.date}`) <= new Date()
      ))  
  };
  const handletapFutur = () => {
    setMyArray(JSON.parse(localStorage.getItem("todos")).filter(
        (todoS, index) => new Date(`${todoS.date}`) >= new Date()
      ))  
  };
  return (
    <Wrapper className="App">
      <Eclipse
        src={Eclipse1}
        alt="alt"
        bottom="bottom"
        width="width"
        height="height"
      />
      <Title>Shoping List</Title>
      <Tap left={"left"} onClick={handletapFutur}> {"Future"}</Tap>
      <Tap onClick={handletap}> {"Past"}</Tap>
      <Container>
        <ul>
          {myArray.map((todoS, index,) => {
            console.log(todoS.completed);
            console.log(todoS[index]);
            return (
              <Index>
                <li   className={todoS.completed ? "done" : ""}
                                 >
                  {
                    <Displaylist width="width" color="color">
                      {todoS.newToDo}{" "}
                    </Displaylist>
                  }
                </li>
                <Calend>{todoS.date}</Calend>
              </Index>
            ) 
            
          })}
        </ul>
      </Container>

      <Eclipse src={Eclipse4} alt="alt" />
      <Eclipse src={Eclipse3} alt="alt" />
      <Eclipse src={Eclipse2} alt="alt" />
    </Wrapper>
  );
};

export default DisplayToDo;
