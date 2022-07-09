import React, { useEffect, useState } from 'react';
import './style.css';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div className="work">
          <h3>User Id: {todo.id}</h3>
          <h4>Title is: {todo.title}</h4>
        </div>
      ))}
    </div>
  );
}
/*
<h3>User Id: 1</h3>
     <h4>Title is : dynamic</h4>
      <p> Complited is: False</p>
 
*/
