import React from 'react';
import BlogList from '../components/blog/BlogList';
import PieChart from '../components/blog/PieChart';
import posts from '../constants/posts';
import _ from 'lodash';

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
    this.setState({posts});
  }

  render() {
    const { posts } = this.state;
    return (
      React.createElement('div', {},
        React.createElement(BlogList, { posts, like: this.like }),
        React.createElement(PieChart, { posts })
      )
    );
  }
}

export default BlogsContainer;
