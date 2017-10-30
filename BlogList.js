const BlogList = ({ posts }) => {
  return(
    DOM.div(
      null,
      _.map(
        posts,
        (blog, key) => {
          blog.key = key
          return React.createElement(BlogItem, blog);
        }
      )
    )
  );
}
