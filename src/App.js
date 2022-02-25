import Todos from './17-react-redux-tutorial/components/Todos';
import CounterContainer from './17-react-redux-tutorial/containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
