import React, { useEffect, useState } from 'react'
import './TodoCards.css'

const TodoCards = () => {
  const [showTodos, setShowTodos] = useState([]);
  console.log('state', showTodos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        const limitedData = data.slice(0, 10)
        console.log('limited data', limitedData);

        setShowTodos(limitedData)
      }
      catch (error) {
        console.log('Error fetching todos', error);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='todo-container'>
        {showTodos.map((todo) => (
          <div className='todo'>
            <div className='title'>
              {todo.title}
            </div>
            <div className='id'>
              {todo.id}
            </div>
            <div className='complete'>
              {/* {todo.complete} */}
            </div>
          </div>
        ))}
      </div>
  )
}

export default TodoCards