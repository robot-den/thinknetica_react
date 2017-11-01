class PostMetaInfo extends React.Component {
  render() {
    const { author_name, created_at, updated_at, count_of_likes } = this.props;
    return(
      <div className='post_meta_info'>
        <TextBox>
          {'Author: '}
        </TextBox>
        <TextBox className='author_name'>
          {author_name}
        </TextBox>
        <TextBox>
          {'created at: '}
        </TextBox>
        <TextBox style={{color: 'red', marginRight: '5px'}}>
        {created_at}
        </TextBox>
        <TextBox>
          {'updated at: '}
        </TextBox>
        <TextBox>
          {updated_at}
        </TextBox>
        <Like count={count_of_likes}/>
      </div>
    )
  }
}

PostMetaInfo.defaultProps = {
  author_name: 'Default blog item author',
  created_at: '01.01.1971',
  updated_at: '01.01.1971',
  count_of_likes: 0
}

PostMetaInfo.propTypes = {
  author_name: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  count_of_likes: PropTypes.number
}
