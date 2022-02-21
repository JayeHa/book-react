import { Link, Route } from 'react-router-dom';
import About from './13-spa/About';
import Home from './13-spa/Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
    </div>
  );
};

export default App;
