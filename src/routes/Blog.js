import MainLayout from '../components/layouts/MainLayout';
import BlogsContainer from '../containers/BlogsContainer';
import Post from '../components/blog/Post';

const Index = {
  path: '/',
  component: BlogsContainer
};

const PostRoute = {
  path: 'posts/:id',
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
