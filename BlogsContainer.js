class BlogsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs };
  }

  render() {
    const { blogs } = this.state;
    return React.createElement(BlogList, { blogs })
  }
}
