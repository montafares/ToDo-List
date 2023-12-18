import { useState, useEffect,  useContext, } from "react";
import React from "react";
import Dialog from "./Dialog";
import Svg from "../Images/gridicons_cross-small.svg";
import Eclipse1 from "../Images/Ellipse 1.png";
import Eclipse2 from "../Images/Ellipse 2.png";
import Eclipse3 from "../Images/Ellipse 3.png";
import Eclipse4 from "../Images/Ellipse 4.png";
import { TodoListContext } from "../contexts/Reducers.js";
import {Wrapper,Title,ToDolistinput,AddTods,Displaylist,Index,Container,Eclipse,Day,Button  } from "./Style.js";
export const Todolist = (index)=> {
  const [inputToDo, setInpuToDo] = useState("");
  const [inputNbr, setInputNbr] = useState(null);
  const { tasks, dispatch } = useContext(TodoListContext);
  const handleAddToDo = (e) => {
    if ((e.key === "Enter" || e.type === "click") &&
      inputToDo !== "" && inputNbr !== null) {
      setInpuToDo("");
      setInputNbr(null);
      if (inputToDo === "" || inputNbr === "") return;
      dispatch({
        type: "ADD", newToDo: inputToDo,
        number: inputNbr, completed: false,});} };
  const [dialog, setDialog] = useState({
    isOpen: false, index: null,  });
  useEffect(() => {window.addEventListener("keydown", handleAddToDo);
    return () => { window.removeEventListener("keydown", handleAddToDo);    };  });
  const handleIteamDone = (index) => {
      dispatch({
        type: "TOGGLE", id: index, })};
  const handleDeleteIteam = (index) => {
    setDialog({ isOpen: true, index });  };
  const [value, setValue] = useState("");
  const onchange = (e) => {
    setValue(e.target.value);  };
  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "/" + month + "/" + year; 
  return (
      <Wrapper className="App" >
        <Eclipse
          src={Eclipse1} alt="alt" bottom="bottom"
          width="width"height="height" />
        <Title>Shoping List</Title>
        <ToDolistinput
          type="text" left="left"right="right"
          width="width_search" placeholder="Search here"
          value={value}id="search" onChange={onchange}   />
        <ToDolistinput
          width="width"top="top"left="left"
          type="text" placeholder="Title..."
          value={inputToDo || ""}
          onChange={(e) => setInpuToDo(e.target.value)} />
        <ToDolistinput
          type="number" placeholder="Nbr" min="1"
          value={inputNbr || ""}onChange={(e) => setInputNbr(e.target.value)}/>
        <AddTods onClick={handleAddToDo}> Add</AddTods>
        <Container > 
          {dialog.isOpen && (            
            <Dialog
              onCancel={() => setDialog({ isOpen: false })}
              index={dialog.index}
              todos={tasks}
              setDialog={setDialog} />)}
          <ul >
            {tasks.todos.map(({ newToDo, completed, number, },index) => {
             return (<React.Fragment key={index}>
                   {!value ? (                  
                    <Index>
                      <li className={completed ? "done" : ""}
                        onClick={() => handleIteamDone(index )}   >
                        {  <Displaylist inline="inline" back="back">
                            {number} </Displaylist>}
                        {<Displaylist width="width" color="color">
                            {newToDo} </Displaylist> }
                      </li>
                      <Day >{currentDate}</Day>
                      <span onClick={() => handleDeleteIteam(index)}
                        className="trash">
                        <img src={Svg} alt="alt" />
                      </span>
                    </Index>
                    ) 

                   : newToDo.toLowerCase().includes(value && value.toLowerCase()) ? 
                   ( <Index>
                      <li className={completed ? "done" : ""}
                        onClick={() => handleIteamDone(index)}>
                        <Displaylist inline="inline" back="back">
                          {number}</Displaylist>
                        <Displaylist width="width" color="color">
                          {" "}{newToDo} </Displaylist>
                      </li><Day >{currentDate}</Day>
                      <span onClick={() => handleDeleteIteam(index)}
                        className="trash">
                        <img src={Svg} alt="alt" />
                      </span>
                    </Index>
                  ) : null}
                </React.Fragment>);
            })}
                    <Button>Stock Data</Button>

            <Eclipse src={Eclipse4} alt="alt" />
            <Eclipse src={Eclipse3} alt="alt" />
            <Eclipse src={Eclipse2} alt="alt" />
          </ul>
        </Container>
      </Wrapper>
  );
}
export default Todolist;