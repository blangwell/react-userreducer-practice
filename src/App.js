import { useState, useReducer } from 'react';
import './App.css';
import Todo from './Todo';


export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
}

function reducer(todos, action) {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...todos, newTodo(action.payload.name)]
  } else if (action.type === ACTIONS.TOGGLE_TODO) {
    return todos.map(todo => {

      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete }
      }

      return todo;
    })
  } else if (action.type === ACTIONS.DELETE_TODO) {
    return todos.filter(todo => todo.id !== action.payload.id)
  } else {
    return todos
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name}});
    setName('');
  }

  console.log(todos);
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </>
  )
}

export default App;
