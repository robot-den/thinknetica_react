const Like = ({ count_of_likes, like, id }) => {
  return DOM.div(
    {},
    DOM.button(
      {
        onClick: () => like(id)
      },
      count_of_likes
    )
  );
}

Like.defaultProps = {
  count: 0
}

Like.propTypes = {
  count: PropTypes.number
}
