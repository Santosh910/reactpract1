import React from 'react'
import { memo } from 'react'

const Todos = ({todos}) => {
  return (
    <div>
        <h2>my todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
        })}
    </div>
  )
}

export default memo(Todos);