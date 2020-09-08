import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  {id: 1, task: 'Mow Goat Lawn Man Region', completed: false},
  {id: 2, task: 'Shave Eyebrows', completed: true}
];

export const TodosContext = createContext();
export const DispatchContext = createContext(); // split into 2 contexts -> prevents unecessary rerenders 

export function TodosProvider(props){
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  
  return (
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}