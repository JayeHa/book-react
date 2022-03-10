import { Route } from 'react-router-dom';
import LoginPage from './24-blog-frontend/pages/LoginPage';
import PostListPage from './24-blog-frontend/pages/PostListPage';
import PostPage from './24-blog-frontend/pages/PostPage';
import RegisterPage from './24-blog-frontend/pages/RegisterPage';
import WritePage from './24-blog-frontend/pages/WritePage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};

export default App;
