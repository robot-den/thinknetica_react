import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

const TextBox = ({ style, className, children }) => (
  DOM.span(
    {
      style,
      className
    },
    children
  )
);

TextBox.defaultProps = {
  children: 'Default text'
};

TextBox.propTypes = {
  text: PropTypes.string
};

export default TextBox;
