import React from 'react';
import Todo from './Todo';
export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return todos.map((todo) => {
    return (
      <div key={todo.id}>
        <Todo
          toggleTodo={toggleTodo}
          deleteTodo={() => deleteTodo(todo.id)}
          todo={todo}
        />
      </div>
    );
  });
}
