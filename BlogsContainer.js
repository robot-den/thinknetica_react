class BlogsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.like = bind(this.like, this);
  }

  like(id) {
    const posts = cloneDeep(this.state.posts);
    likedPost = _.find(posts, (post) => ( post.meta.id === id ));
    likedPost.meta.countOfLikes++
    this.setState({posts: posts})
  }

  render() {
    const { posts } = this.state;
    return (
      React.createElement('div', {},
        React.createElement(BlogList, { posts: posts, like: this.like }),
        React.createElement(PieChart, { posts: posts})
      )
    )
  }
}
