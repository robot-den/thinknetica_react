import MainLayout from 'components/layouts/MainLayout';
import BlogsContainer from 'containers/BlogsContainer';
import Post from 'components/blog/Post';
import About from 'components/blog/About';
import { postPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogsContainer
};

const AboutRoute = {
  path: '/about',
  component: About
};

const PostRoute = {
  path: postPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
