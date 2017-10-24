const BlogList = ({ blogs }) => {
  return(
    DOM.div(
      null,
      _.map(
        blogs,
        (blog, key) => {
          blog.key = key
          return React.createElement(BlogItem, blog);
        }
      )
    )
  );
}
