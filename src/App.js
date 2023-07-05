import React from 'react'
import Child from './State_shifting/Child'
import Todo from './State_shifting/ToDo';
import NewToDo from './State_shifting/NewToDo';

export default function App() {
  // const data = 'I am from parent (app)';
  // const handleChildData = (item) => {
  //   console.log(item);
  // }
  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
  }

  return (
    <div>
      <NewToDo onHandleNewTodo = {handleNewTodo} />
      <Todo title = "learn react.js" />
    </div>
  )
}
