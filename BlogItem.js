class BlogItem extends React.Component {
  render() {
    const { image, description, meta } = this.props;
    return(
      <div>
        <Image {...image} />
        <br/>
        <TextBox>
          {description.text}
        </TextBox>
        <br/>
        <TextBox>
          {'Author: '}
        </TextBox>
        <TextBox className='author_name'>
          {meta.author_name}
        </TextBox>
        <TextBox>
          {'created at: '}
        </TextBox>
        <TextBox style={{color: 'red', marginRight: '5px'}}>
        {meta.created_at}
        </TextBox>
        <TextBox>
          {'updated at: '}
        </TextBox>
        <TextBox>
          {meta.updated_at}
        </TextBox>
        <Like count={meta.count_of_likes}/>
        <br/>
        <br/>
      </div>
    )
  }
}

BlogItem.defaultProps = {
  description: {
    text: 'default blog item description'
  },
  image: {
    src: 'https://test.com/default.png',
    alt: 'default blog item Opps',
    width: 100,
    height: 100
  },
  meta: {
    author_name: 'Default blog item author',
    created_at: '01.01.1970',
    updated_at: '01.01.1970'
  }
}

BlogItem.propTypes = {
  description: PropTypes.shape(TextBox.propTypes),
  image: PropTypes.shape(Image.propTypes),
  meta: PropTypes.shape({
    author_name: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string
  })
}
