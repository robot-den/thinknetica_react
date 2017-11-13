const BlogList = ({ posts, like }) => {
  return(
    DOM.div(
      null,
      _.map(
        posts,
        (post, _) => {
          post.meta.like = () => like(post.meta.id);
          return React.createElement(BlogItem, {...post, key: post.meta.id});
        }
      )
    )
  );
}
