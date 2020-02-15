import React from 'react';
import { useTodosDispatch } from '../context/todos_context';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id
    })
  }

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id
    })
  }

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>{todo.text}</span>
      <span className="remove" onClick={onRemove}>(X)</span>
      <style jsx>{`
        .TodoItem .text {
          cursor: pointer;
        }
        
        .TodoItem.done .text {
          color: #999999;
          text-decoration: line-through;
        }
        
        .TodoItem .remove {
          color: red;
          margin-left: 4px;
          cursor: pointer;
        }
      `}</style>
    </li>
  );
}

export default TodoItem;