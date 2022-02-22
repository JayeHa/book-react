import { Route } from 'react-router-dom';
import NewsPage from './14-news-viwer/pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
