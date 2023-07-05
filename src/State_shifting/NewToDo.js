import React from 'react'

const NewToDo = (props) => {
    props.onHandleNewTodo({title:'i am from new todo'})
  return (
    <div>NewToDo</div>
  )
}

export default NewToDo
