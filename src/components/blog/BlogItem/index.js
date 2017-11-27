import React from 'react';
import PropTypes from 'prop-types';
import PostMetaInfo from './PostMetaInfo';
import TextBox from './TextBox';
import Image from './Image';

class BlogItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !(this.props.meta.countOfLikes === nextProps.meta.countOfLikes);
  }

  render() {
    const { image, description, meta } = this.props;
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
};

BlogItem.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape(Image.propTypes),
  meta: PropTypes.shape(PostMetaInfo.propTypes)
};

export default BlogItem;
