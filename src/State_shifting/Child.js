import React from 'react'

const Child = (props) => {
    const data = 'I am from child component';
    // props.onChildData(data);
  return (
    <div>
        <Child />
    </div>
  )
}

export default Child