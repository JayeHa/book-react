import { Route } from 'react-router-dom';
import Menu from './20-serverside-rendering/components/Menu';
import BluePage from './20-serverside-rendering/pages/BluePage';
import RedPage from './20-serverside-rendering/pages/RedPage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
};

export default App;
