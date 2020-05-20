import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [draft, setDraft] = useState({
    id: null,
    name: '',
    completed: false,
  });
  const [count, setCount] = useState(0);

  function handleAddTodo(event) {
    const newTodos = [draft, ...todos];
    setDraft({
      id: null,
      name: '',
      completed: false,
    });
    if (draft.name === '') {
      alert('please enter a todo');
    } else {
      setTodos(newTodos);
    }
    event.preventDefault();
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  function handleChange(event) {
    setCount(count + 1);
    const newDraft = {
      id: count,
      name: event.target.value,
      completed: false,
    };

    setDraft(newDraft);
  }
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
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
        <div>{todos.filter((todo) => !todo.completed).length} left to do</div>
      </form>
    </>
  );
}

export default App;
