import Counter from './17-react-redux-tutorial/components/Counter';
import Todos from './17-react-redux-tutorial/components/Todos';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
