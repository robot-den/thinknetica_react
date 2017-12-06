import React from 'react';
import DOM from 'react-dom-factories';
import _ from 'lodash';
import BlogItem from './BlogItem';
import Link from 'components/elements/Link';
import { postPath } from 'helpers/routes';

const BlogList = ({ posts, like }) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => {
        post.meta.like = () => like(post.meta.id);
        post.key = post.meta.id;
        return (
          <div>
            <h3>
              <Link to={postPath(post.meta.id)}>{post.description}</Link>
            </h3>
            <BlogItem {...post} />
          </div>
        );
        // return React.createElement(BlogItem, {...post, key: post.meta.id});
      }
    )
  )
);

export default BlogList;
