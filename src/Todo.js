import React from 'react';
export default function Todo({ todo, toggleTodo, deleteTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  function handleDeleteTodo() {
    deleteTodo(todo.name);
  }

  return (
    <div>
      <button
        // style={{
        //   position: 'absolute',
        //   top: ' 0',
        //   right: '10px',
        //   bottom: '0',
        //   width: '20px',
        //   height: '20px',
        //   margin: '0',
        //   fontSize: ' 15px',
        //   color: '#cc9a9a',
        //   marginBottom: '11px',
        //   transition: ' color 0.2s ease-out',
        // }}
        onClick={handleDeleteTodo}
      >
        x
      </button>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleTodoClick}
      />

      {todo.name}
    </div>
  );
}
