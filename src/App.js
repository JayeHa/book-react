import { Link, Route } from 'react-router-dom';
import About from './13-spa/About';
import HistorySample from './13-spa/HistorySample';
import Home from './13-spa/Home';
import Profile from './13-spa/Profile';

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
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
};

export default App;
