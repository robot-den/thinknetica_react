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
        post.withoutTitle = true;
        return (
          <div key={post.meta.id}>
            <h3>
              <Link to={postPath(post.meta.id)}>{post.title}</Link>
            </h3>
            <BlogItem post={post} />
          </div>
        );
      }
    )
  )
);

export default BlogList;
