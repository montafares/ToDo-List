import { useReducer } from "react";
import Dialog from "./Dialog";
import Todolist from "./Todolist";
import {
  TasksContext,
  TasksDispatchContext,
} from "./contexts/utils/context.js";
import tasksReducer from "../contexts/actions/reducers.js";

const Task = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
};
export default Task;
