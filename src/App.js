import React from 'react';
import TodoInsert from './10-todo-web-app/components/TodoInsert';
import TodoList from './10-todo-web-app/components/TodoList';
import TodoTemplate from './10-todo-web-app/components/TodoTemplate';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
