const Image = ({ src, width, height, alt }) => {
  return DOM.img({
    src: src,
    width: width || 100,
    height: height || 100,
    alt: alt || 'oops!'
  })
};
