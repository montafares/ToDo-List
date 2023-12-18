import React from "react";

export const TodoListContext = React.createContext();
let letid = 0;

export const tasksReducer = (tasks, action) => {
  if (localStorage.getItem('todos')) {
    let ls = localStorage.getItem('todos');
    let todosarray = ls.split(',');
    console.log(todosarray);
    tasks =  todosarray;
  }
  switch (action.type) {
    case "ADD": {
      return {
        
        todos: [
          ...tasks.todos,

          {
            newToDo: action.newToDo,
            number: action.number,
            completed: false,
            id : letid++,
            
          },
          
        ],
      };
      
    }
    

    case "TOGGLE": {
      return {
        ...tasks,
      todos:
     
        tasks.todos.map((t,id) =>
          id === action.id ? { ...t, completed: !t.completed } : t
        ),
      };
    }
    case "DELETE": {
        const idx  = tasks.todos.findIndex((t,id) => id === action.id);
      const todos = Object.assign([],tasks.todos);
      console.log(todos);
      todos.splice(idx, 1);
      return {       
        todos  :todos
      };
        }
    default: {
      return tasks;
    }
  }
};

export const Provider = ({ children }) => {
  const [tasks, dispatch] = React.useReducer(tasksReducer, { todos: [] });
  return (

    <TodoListContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};
export default Provider;
