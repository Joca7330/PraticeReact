import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import './TodoCards.css'

const TodoCards = () => {
  const [showToDo, setShowTodo] = useState([]);


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json();
        // console.log('data', data);
        const limitedData = data.slice(0, 9)
        console.log('limited data', limitedData);

        setShowTodo(limitedData); // Update state with the fetched data
      } catch (error) {
        console.log('Failed to fetch todos', error);
      }
    };
    fetchTodos(); // Call the async function
  }, []);
  return (
    <div className='todo-container'>
      <div className='container'>
        {showToDo.map((todo) => (
          <div className='todo'>
            <div className='title'>
              {todo.title}
            </div>
            <div className='id'>
              {todo.id}
            </div>
            <div className='completed'>
              {/* {todo.completed} */}
            </div>
          </div>
        ))}
        <div>
        </div>
      </div>
    </div>
  )
}
export default TodoCards








