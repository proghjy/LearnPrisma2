import React from 'react';
import TodoItem from './todo_item';
import { useTodosState } from '../context/todos_context';

function TodoList() {
  const todos = useTodosState();
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;