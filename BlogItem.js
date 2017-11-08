class BlogItem extends React.Component {
  componentWillReceiveProps(nextProps) {
    // this.props and nextProps are equal here...
  }
  shouldComponentUpdate(nextProps, nextState) {
    // here nextProps already applied to this.props...
    // return !_.isEqual(nextProps, this.props)
    return true
  }
  render() {
    const { image, description, meta } = this.props;
    return(
      <div>
        <div>
          <Image {...image} />
        </div>
        <TextBox>
          {description}
        </TextBox>
        <PostMetaInfo {...meta}/>
      </div>
    )
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
    author_name: 'Default blog item author',
    created_at: '01.01.1970',
    updated_at: '01.01.1970'
  }
}

BlogItem.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape(Image.propTypes),
  meta: PropTypes.shape(PostMetaInfo.propTypes)
}
