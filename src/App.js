import React from 'react';
import TodoInsert from './10-todo-web-app/components/TodoInsert';
import TodoTemplate from './10-todo-web-app/components/TodoTemplate';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
