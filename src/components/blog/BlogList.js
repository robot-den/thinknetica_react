import React from 'react';
import DOM from 'react-dom-factories';
import _ from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ({ posts, like }) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => {
        post.meta.like = () => like(post.meta.id);
        post.key = post.meta.id;
        return <BlogItem {...post} />;
        // return React.createElement(BlogItem, {...post, key: post.meta.id});
      }
    )
  )
);

export default BlogList;
