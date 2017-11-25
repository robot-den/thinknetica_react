import React from 'react';
import PropTypes from 'prop-types';
import TextBox from './TextBox';
import Like from './Like';


const PostMetaInfo = ({ authorName, createdAt, updatedAt, countOfLikes, like }) => (
  <div className='post_meta_info'>
    <TextBox>
      {'Author: '}
    </TextBox>
    <TextBox className='authorName'>
      {authorName}
    </TextBox>
    <TextBox>
      {'created at: '}
    </TextBox>
    <TextBox style={{color: 'red', marginRight: '5px'}}>
      {createdAt}
    </TextBox>
    <TextBox>
      {'updated at: '}
    </TextBox>
    <TextBox>
      {updatedAt}
    </TextBox>
    <Like countOfLikes={countOfLikes} like={like} />
  </div>
);

PostMetaInfo.defaultProps = {
  authorName: 'Default blog item author',
  createdAt: '01.01.1971',
  updatedAt: '01.01.1971',
  countOfLikes: 0
};

PostMetaInfo.propTypes = {
  authorName: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  countOfLikes: PropTypes.number,
  like: PropTypes.func
};

export default PostMetaInfo;
