import React from 'react';
import PropTypes from 'prop-types';
import PostMetaInfo from './PostMetaInfo';
import TextBox from './TextBox';
import Image from './Image';

class BlogItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !(this.props.post.meta.countOfLikes === nextProps.post.meta.countOfLikes);
  }

  render() {
    const { image, description, meta } = this.props.post;
    return (
      <div>
        <div>
          <Image {...image} />
        </div>
        <TextBox>
          {description}
        </TextBox>
        <PostMetaInfo {...meta}/>
      </div>
    );
  }
}

BlogItem.defaultProps = {
  post: {
    description: 'default blog item description',
    image: {
      src: 'https://test.com/default.png',
      alt: 'default blog item Opps',
      width: 100,
      height: 100
    },
    meta: {
      authorName: 'Default blog item author',
      createdAt: '01.01.1970',
      updatedAt: '01.01.1970'
    }
  }
};

BlogItem.propTypes = {
  post: PropTypes.object
};

export default BlogItem;
