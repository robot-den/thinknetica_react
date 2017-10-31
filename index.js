const { DOM, PropTypes } = React;
const { bind } = _;

const posts = [
  {
    description: { text: 'text1' },
    image: {
      src: 'https://test.com/test1.png',
      width: 100,
      height: 100
    },
    meta: {
      author_name: 'Hank',
      created_at: moment().format('DD.MM.YYYY'),
      updated_at: moment().format('DD.MM.YYYY')
    }
  },
  {
    description: { text: 'text2' },
    image: {
      src: 'https://test.com/test2.png',
      alt: 'Opps_2!',
      width: 100,
      height: 100
    },
    meta: {
      author_name: 'Hank',
      created_at: moment().format('DD.MM.YYYY'),
      updated_at: moment().format('DD.MM.YYYY'),
      count_of_likes: 11
    }
  },
  {
    description: {},
    image: {
      src: 'https://test.com/test3.png',
      alt: 'Opps_3!',
      width: 100,
      height: 100
    },
    meta: {
      author_name: 'Hank',
      created_at: moment().format('DD.MM.YYYY'),
      updated_at: moment().format('DD.MM.YYYY'),
      count_of_likes: 12
    }
  }
]

ReactDOM.render(
  React.createElement(BlogsContainer),
  document.getElementById('app')
)
