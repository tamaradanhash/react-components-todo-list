import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [draft, setDraft] = useState({
    id: null,
    name: '',
    completed: false,
  });

  function handleAddTodo(event) {
    const newTodos = [draft, ...todos];
    setTodos(newTodos);
    setDraft({
      id: null,
      name: '',
      completed: false,
    });
    event.preventDefault();
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }
  function handleChange(event) {
    const newDraft = {
      id: todos.length,
      name: event.target.value,
      completed: false,
    };
    setDraft(newDraft);
  }
  function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);
  }
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          placeholder="what needs to be done"
          type="text"
          onChange={handleChange}
          value={draft.name}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Completed</button>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <div>{todos.filter(todo => !todo.completed).length} left to do</div>
      </form>
    </>
  );
}

export default App;
