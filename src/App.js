import { Route } from 'react-router-dom';
import About from './13-spa/About';
import Home from './13-spa/Home';

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
