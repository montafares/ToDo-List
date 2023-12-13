import { useState, useEffect, useReducer, useContext } from "react";
import styled from "@emotion/styled";
import Dialog from "./Dialog";
import Svg from "../Images/gridicons_cross-small.svg";
import Eclipse1 from "../Images/Ellipse 1.png";
import Eclipse2 from "../Images/Ellipse 2.png";
import Eclipse3 from "../Images/Ellipse 3.png";
import Eclipse4 from "../Images/Ellipse 4.png";
import { TodoListContext } from "../contexts/actions/Reducers.js";
const Wrapper = styled.div`
  border: 3px solid #3d3d3d;
  margin-top: 58px;
  margin-left: 124px;
  width: 438px;
  height: 653px;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.1) 73.15%
  );
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
`;
const Title = styled.div`
  text-align: center;
  font-family: "Montserrat";
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.9);
`;
const ToDolistinput = styled.input`
  color: rgba(33, 33, 33, 0.7);
  text-align: center;
  font-family: "Montserrat";
  font-size: 18.22px;
  font-weight: 300;
  width: ${(props) => {
    if (props.width === "width_search") {
      return "380px";
    }
    if (props.width === "width") {
      return " 192px";
    } else {
      return "64px";
    }
  }};
  height: 35px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: ${(props) => (props.top === "top" ? "25px;" : "0px")};
  margin-right: ${(props) => (props.right === "right" ? "0px;" : "10px")};
  margin-left: ${(props) => (props.left === "left" ? "25px;" : "-5px")};
`;
const AddTods = styled.button`
  border-radius: 5px;
  color: yellow;
  border: 2px solid yellow;
  background-color: transparent;
  width: 101px;
  height: 39px;
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 400;
`;
const Displaylist = styled.span`
  justify-content: center;
  display: ${(props) =>
    props.inline === "inline" ? "inline-block" : "contents"};
  padding-top: 7px;
  border-radius: 3px;
  background: ${(props) =>
    props.back === "back" ? "var(--Gold, #ffd700)" : "#000"};
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  height: 30px;
  width: ${(props) => (props.width === "width" ? "265px" : "34px")};
  color: ${(props) =>
    props.color === "color" ? "rgba(255, 255, 255, 0.9)" : "#000"};
  font-family: "Calibri_Bold";
  font-size: 20px;
  font-weight: 500;
`;
const Index = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 380px;
  height: 36px;
  flex-shrink: 0;
  list-style: none;
  border-bottom: 1px solid yellow;
  margin-right: 30px;
  padding: 15px;
`;
const Container = styled.div`
  ul {
    overflow: auto;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  margin-left: 23px;
  flex-direction: column;
  align-items: center;
  width: 385px;
  height: 450px;
`;
const Eclipse = styled.img`
  position: absolute;
  bottom: ${(props) => (props.bottom === "bottom" ? "!0" : "0")};
  left: 0;
  z-index: -1;
  border-radius: 30px;
  width: ${(props) => (props.width === "width" ? "170px" : "439px")};
  height: ${(props) => (props.height === "height" ? "170px" : "439px")};
  flex-shrink: 0;
`;
function Todolist(index) {
  const [inputToDo, setInpuToDo] = useState("");
  const [inputNbr, setInputNbr] = useState(null);
  const { tasks, dispatch } = useContext(TodoListContext);
  const handleAddToDo = (e) => {
    if (
      (e.key === "Enter" || e.type === "click") &&
      inputToDo !== "" &&
      inputNbr > 0
    ) {
      setInpuToDo("");
      setInputNbr(null);
      if (inputToDo === "" || inputNbr === "") return;
      dispatch({
        type: "ADD",
        newToDo: inputToDo,
        number: inputNbr,
        completed: false,
      });
    }
  };
  const [dialog, setDialog] = useState({
    isOpen: false,
    index: null,
  });
  useEffect(() => {
    window.addEventListener("keydown", handleAddToDo);
    return () => {
      window.removeEventListener("keydown", handleAddToDo);
    };
  });
  const handleIteamDone = (index) => {
    console.log(index);

    dispatch({
      type: "TOGGLE",
      index,
    });
  };
  const handleDeleteIteam = (index) => {
    console.log(index);

    setDialog({ isOpen: true, index });
    // dispatch({
    //   type: "DELETE",
    //   index,
    // });
  };
  const [value, setValue] = useState("");
  const onchange = (e) => {
    setValue(e.target.value);
  };
  return (
      <Wrapper className="App" >
        <Eclipse
          src={Eclipse1}
          alt="alt"
          bottom="bottom"
          width="width"
          height="height"
        />
        <Title>Shoping List</Title>
        <ToDolistinput
          type="text"
          left="left"
          right="right"
          width="width_search"
          placeholder="Search here"
          value={value}
          id="search"
          onChange={onchange}
        />
        <ToDolistinput
          width="width"
          top="top"
          left="left"
          type="text"
          placeholder="Title..."
          value={inputToDo || ""}
          onChange={(e) => setInpuToDo(e.target.value)}
        />
        <ToDolistinput
          type="number"
          placeholder="Nbr"
          value={inputNbr || ""}
          onChange={(e) => setInputNbr(e.target.value)}
        />
        <AddTods onClick={handleAddToDo}> Add</AddTods>
        <Container key={index}> 
          {dialog.isOpen && (
            <Dialog
              onCancel={() => setDialog({ isOpen: false })}
              index={index}
              todos={tasks}
              setDialog={setDialog}
            />
          )}
          <ul >
            {tasks.todos.map(({ newToDo, completed, number }, index) => {
              return (
                <>
                  {!value ? (
                    <Index >
                      <li 
                        className={completed ? "done" : ""}
                        onClick={() => handleIteamDone(index)}
                      >
                        {
                          <Displaylist inline="inline" back="back">
                            {number}
                          </Displaylist>
                        }
                        {
                          <Displaylist width="width" color="color">
                            {newToDo}
                          </Displaylist>
                        }
                      </li>
                      <span  
                        onClick={() => handleDeleteIteam()}
                        className="trash"
                      >
                        <img src={Svg} alt="alt" />
                      </span>
                    </Index>
                  ) : newToDo
                      .toLowerCase()
                      .includes(value && value.toLowerCase()) ? (
                    <Index>
                      <li
                        className={completed ? "done" : ""}
                        onClick={() => handleIteamDone(index)}
                      >
                        <Displaylist inline="inline" back="back">
                          {number}
                        </Displaylist>
                        <Displaylist width="width" color="color">
                          {" "}
                          {newToDo}
                        </Displaylist>
                      </li>
                      <span
                        onClick={() => handleDeleteIteam()}
                        className="trash"
                      >
                        <img src={Svg} alt="alt" />
                      </span>
                    </Index>
                  ) : null}
                </>
              );
            })}
            <Eclipse src={Eclipse4} alt="alt" />
            <Eclipse src={Eclipse3} alt="alt" />
            <Eclipse src={Eclipse2} alt="alt" />
          </ul>
        </Container>
      </Wrapper>
  );
}
export default Todolist;