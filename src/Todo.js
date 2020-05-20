import React from 'react';
export default function Todo({ todo, toggleTodo, deleteTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  function handleDeleteTodo() {
    deleteTodo(todo.name);
  }

  return (
    <div style={{ borderColor: 'black', borderWidth: '10px' }}>
      <button onClick={handleDeleteTodo}>
        <strong>x</strong>
      </button>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleTodoClick}
      />

      <u> {todo.name}</u>
    </div>
  );
}
