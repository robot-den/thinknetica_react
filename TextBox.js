const TextBox = ({ style, className, children }) => (
  DOM.span(
    {
      style: style,
      className: className
    },
    children
  )
);

TextBox.defaultProps = {
  children: 'Default text'
}

TextBox.propTypes = {
  text: PropTypes.string
}
