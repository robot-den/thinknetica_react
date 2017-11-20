import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const Like = ({ countOfLikes, like }) => {
  return DOM.div(
    {},
    DOM.button(
      {onClick: () => like()},
      countOfLikes
    )
  );
};

Like.defaultProps = {
  countOfLikes: 0
};

Like.propTypes = {
  countOfLikes: PropTypes.number
};

export default Like;
