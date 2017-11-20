import React from 'react';
import BlogList from './BlogList';
import PieChart from './PieChart';
import _ from 'lodash';
import posts from '../../constants/posts';

class BlogsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.like = _.bind(this.like, this);
  }

  like(id) {
    const posts = _.cloneDeep(this.state.posts);
    const likedPost = _.find(posts, (post) => (post.meta.id === id));
    likedPost.meta.countOfLikes++;
    this.setState({posts: posts});
  }

  render() {
    const { posts } = this.state;
    return (
      React.createElement('div', {},
        React.createElement(BlogList, { posts: posts, like: this.like }),
        React.createElement(PieChart, { posts: posts})
      )
    );
  }
}

export default BlogsContainer;
