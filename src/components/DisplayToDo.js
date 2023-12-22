
import React from "react";
import { useTodo } from "../contexts/Reducers.js";
import Eclipse1 from "../Images/Ellipse 1.png";
import Eclipse2 from "../Images/Ellipse 2.png";
import Eclipse3 from "../Images/Ellipse 3.png";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Eclipse4 from "../Images/Ellipse 4.png";
import {Wrapper,Title,Container,Eclipse,Index ,Displaylist ,Calend} from "./Style.js";
const DisplayToDo = () => {
   
    const myArray = JSON.parse(localStorage.getItem("todos")|| []);
    console.log(myArray);
    return (
<Wrapper className="App" >
<Eclipse
          src={Eclipse1} alt="alt" bottom="bottom"
          width="width"height="height" />
          <Title>Shoping List</Title>
          
            <Container>
            <Tabs> 
                
            <ul> {myArray.map((todoS, index) => {
                return (
                    <Index>
                    <li key={index}>
                    {/* <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleIteamDone(index)}
                    /> */}
                      {/* {<Displaylist >
                            {todoS.number} </Displaylist> } */}
                        {<Displaylist width="width" color="color">
                            {todoS.newToDo} </Displaylist> }
                            </li>
                    <Calend>{ todoS.date}</Calend>
                    {/* <span className={todo.completed ? "done" : ""}>
                        {todo.newToDo} { "                  "}
                    </span> */}
                    {/* <span className={todo.completed ? "done" : ""}>
                        {todo.number}
                    </span> */}
                    {/* <span className={todo.completed ? "done" : ""}>
                        {todo.date}
                    </span> */}
                    {/* <button onClick={() => handleDeleteIteam(index)}> */}
                        {/* Delete
                    </button> */}
                   
                    </Index>
                );
                
            })} </ul>
            </Tabs> 
            </Container>
          <Eclipse src={Eclipse4} alt="alt" />
            <Eclipse src={Eclipse3} alt="alt" />
            <Eclipse src={Eclipse2} alt="alt" />
          </Wrapper>
    );
  };
  
  export default DisplayToDo;