import { Route } from 'react-router-dom';
import Menu from './20-serverside-rendering/components/Menu';
import loadable from '@loadable/component';

const BluePage = loadable(() =>
  import('./20-serverside-rendering/pages/BluePage'),
);
const RedPage = loadable(() =>
  import('./20-serverside-rendering/pages/RedPage'),
);
const UsersPage = loadable(() =>
  import('./20-serverside-rendering/pages/UsersPage'),
);

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
};

export default App;
