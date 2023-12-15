import React, {  useContext } from "react";
import styled from "@emotion/styled";
import { TodoListContext }  from "../contexts/Reducers.js";
export const  Dialog = ({ onCancel, confirm, index, isOpen, todos, setDialog })=> {
  const message = "Are you sure you?";
  const { tasks, dispatch } = useContext(TodoListContext);

  const PopDialog = styled.div`
    padding: 22px;
    width: 150px;
    position: absolute;
    background: #ffffff;
    border-radius: 10px;
  `;
  const Button = styled.button`
    margin-left: 10px;
    background: ${(props) => (props.color === "red" ? "#ff0000" : "#00ff00")};
    width: 60px;
    height: 28px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  `;
  console.log(index);
  const onDelete = () => {
    dispatch({
      type: "DELETE",
     id: index,
    }); 
    setDialog({ isOpen: false });
  console.log(index);

  };
  return (

    <PopDialog>
      <h3>{message}</h3>
      <div>
        <Button className="cancel" onClick={onCancel}>
          Cancel
        </Button>
        <Button id={confirm} color="red" onClick={() => onDelete(index)}>
          Delete
        </Button>
      </div>
    </PopDialog>
  );
}
export default Dialog;
