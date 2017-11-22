import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'

const Like = ({ countOfLikes, like }) => {
  return DOM.div(
    {},
    React.createElement(
      Button,
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
