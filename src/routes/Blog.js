import MainLayout from '../components/layouts/MainLayout';
import BlogsContainer from '../containers/BlogsContainer';

const Index = {
  path: '/',
  component: BlogsContainer
};

export default {
  component: MainLayout,
  childRoutes: [
    Index
  ]
};
