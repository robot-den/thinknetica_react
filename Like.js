class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props};
    this.like = bind(this.like, this)
  }

  like() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    const { count } = this.state;
    return DOM.div({}, DOM.button({onClick: this.like}, count));
  }
}

Like.defaultProps = {
  count: 0
}

Like.propTypes = {
  count: PropTypes.number
}
