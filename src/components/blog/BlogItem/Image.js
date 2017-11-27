import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

const Image = (props) => DOM.img(props);

Image.defaultProps = {
  src: 'https://test.com/defaultim.png',
  alt: 'default Opps',
  width: 100,
  height: 100
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Image;
