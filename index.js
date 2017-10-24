const blogs = [
  {
    text: { string: 'text' },
    image: { src: 'https://test.com/test.png' }
  },
  {
    text: { string: 'text' },
    image: { src: 'https://test.com/test.png' }
  },
  {
    text: { string: 'text' },
    image: { src: 'https://test.com/test.png' }
  }
]


ReactDOM.render(
  React.createElement(BlogsContainer),
  document.getElementById('app')
)
