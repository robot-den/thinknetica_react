import React from 'react';
import BlogList from 'components/blog/BlogList';
import PieChart from 'components/blog/PieChart';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';
import request from 'superagent';

class BlogsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.like = _.bind(this.like, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request
      .get('http://localhost:3001/')
      .end(
        (err, res) => {
          const posts = (err) ? [] : res.body;
          this.setState({posts});
        }
      );
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
      <Grid>
        <Grid.Column width={8}>
          <BlogList posts={posts} like={this.like} />
        </Grid.Column>
        <Grid.Column width={8}>
          <PieChart posts={posts} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default BlogsContainer;
