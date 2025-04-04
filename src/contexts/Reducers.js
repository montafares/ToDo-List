import React from "react";


export const TodoListContext = React.createContext();
let letid = 0;

export const tasksReducer = (tasks, action) => {
 
  switch (action.type) {
    
    case "ADD": {
      return {
        
        todos: [
          ...tasks.todos,
          
          {
            date: action.date,
            newToDo: action.newToDo,
            number: action.number,
            completed: false,
            
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
