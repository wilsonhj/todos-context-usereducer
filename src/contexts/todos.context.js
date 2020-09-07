import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {id: 1, task: 'Mow Goat Lawn Man Region', completed: false},
  {id: 2, task: 'Shave Eyebrows', completed: true}
];

//all methods interacting with todos
export const TodosContext = createContext();

export function TodosProvider(props){
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}