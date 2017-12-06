import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';
import { Item } from 'semantic-ui-react';
import posts from '../../constants/posts';

const Post = ({ params }) => (
  <Item.Group>
    <BlogItem {...posts[params.id - 1]} />
  </Item.Group>
);

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
