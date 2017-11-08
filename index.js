const { DOM, PropTypes } = React;
const { bind } = _;

const posts = [
  {
    description: 'text1',
    image: {
      src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
      width: 100,
      height: 100
    },
    meta: {
      author_name: 'Hank',
      created_at: moment().format('DD.MM.YYYY'),
      updated_at: moment().format('DD.MM.YYYY'),
      count_of_likes: 0,
      id: 1
    }
  },
  {
    description: 'text2',
    image: {
      src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
      alt: 'Opps_2!',
      width: 100,
      height: 100
    },
    meta: {
      author_name: 'Hank',
      created_at: moment().format('DD.MM.YYYY'),
      updated_at: moment().format('DD.MM.YYYY'),
      count_of_likes: 11,
      id: 2
    }
  },
  {
    description: 'text3',
    image: {
      src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
      alt: 'Opps_3!',
      width: 100,
      height: 100
    },
    meta: {
      author_name: 'Hank',
      created_at: moment().format('DD.MM.YYYY'),
      updated_at: moment().format('DD.MM.YYYY'),
      count_of_likes: 12,
      id: 3
    }
  }
]

ReactDOM.render(
  React.createElement(BlogsContainer),
  document.getElementById('app')
)
