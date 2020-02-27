import React from 'react';
import Todo from './Todo';
export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return todos.map(todo => {
    return (
      <div
        key={todo.id}
        style={{ border: '1px solid grey', marginBottom: '20px' }}
      >
        <Todo
          toggleTodo={toggleTodo}
          deleteTodo={() => deleteTodo(todo.id)}
          todo={todo}
        />
      </div>
    );
  });
}
