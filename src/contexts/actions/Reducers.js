import React from "react";

export const TodoListContext = React.createContext();

export const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        todos: [
          ...tasks.todos,

          {
            newToDo: action.newToDo,
            number: action.number,
            completed: false,
          },
        ],
      };
    }
    case "TOGGLE": {
      console.log(tasks.todos);

      return  {
        todos: 
        [
        tasks.todos.map((t, index) =>
          index === action.index ? { ...t, completed: !t.completed } : t
        ),
      ]};
    }
    // case "CHANGE": {
    //   return tasks.map((t) => {
    //     if (t.done !== action.task.done) {
    //       return action.task;
    //     } else {
    //       return t;
    //     }
    //   });
    // }
    case "DELETE": {
      const idx = tasks.todos.findIndex(t => t.id === action.index);
      const todos = Object.assign([],tasks.todos);
      todos.splice(idx,1);
      return {
        todos  : todos
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
