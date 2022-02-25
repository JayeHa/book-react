import Todos from './17-react-redux-tutorial/components/Todos';
import CounterContainer from './17-react-redux-tutorial/containers/CounterContainer';
import TodosContainer from './17-react-redux-tutorial/containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
