import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

const TodoCards = () => {
  const [showToDo, setShowTodo] = useState([]);


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log('data', data);
        setShowTodo(data); // Update state with the fetched data
      } catch (error) {
        console.log('Failed to fetch todos', error);
      }
    };
    fetchTodos(); // Call the async function
  }, []);
  return (
    <div>
      {showToDo.map((todo) => (
        todo.title
      ))}
      <div>
      </div>
    </div>
  )
}
export default TodoCards








