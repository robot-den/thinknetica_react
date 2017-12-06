import MainLayout from '../components/layouts/MainLayout';
import BlogsContainer from '../containers/BlogsContainer';
import Post from '../components/blog/Post';
import { postPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogsContainer
};

const PostRoute = {
  path: postPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
