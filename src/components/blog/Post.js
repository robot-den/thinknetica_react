import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';
import { Item } from 'semantic-ui-react';
import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { params: props.params };
  }

  componentDidMount() {
    this.fetchPost(this.state.params.id);
  }

  fetchPost(id) {
    request
      .get(`http://localhost:3001/posts/${id}`)
      .end((err, res) => this.setState({post: res.body}));
  }

  render() {
    return (
      <Item.Group>
        <BlogItem post={this.state.post} />
      </Item.Group>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
