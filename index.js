const posts = [
  {
    description: { text: 'text1' },
    image: {
      src: 'https://test.com/test1.png',
      alt: 'Opps_1!',
      width: 100,
      height: 100
    }
  },
  {
    description: { text: 'text2' },
    image: {
      src: 'https://test.com/test2.png',
      alt: 'Opps_2!',
      width: 100,
      height: 100
    }
  },
  {
    description: { text: 'text3' },
    image: {
      src: 'https://test.com/test3.png',
      alt: 'Opps_3!',
      width: 100,
      height: 100
    }
  }
]

ReactDOM.render(
  React.createElement(BlogsContainer),
  document.getElementById('app')
)
