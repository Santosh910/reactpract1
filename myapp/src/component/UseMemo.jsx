import React, { useState } from 'react'
import Todos from './Todos';

const UseMemo = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodos = () => {
    setTodos((a) => a + 1)
  }

  return (
    <>
      < Todos todos={todos} addTodos={addTodos} />
      <hr />
      <div>
        count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default UseMemo