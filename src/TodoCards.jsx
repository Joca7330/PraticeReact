import React, { useEffect, useState } from 'react'

const TodoCards = () => {
  const [showTodos, setShowTodos] = useState([]);
  console.log('state', showTodos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        setShowTodos(data)
      }
      catch (error) {
        console.log('Error fetching todos', error);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <div>
        {showTodos.map((todo) => (
          todo.title
        ))}
      </div>
    </div>
  )
}

export default TodoCards