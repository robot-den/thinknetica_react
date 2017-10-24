const BlogItem = ({ image, text }) => {
  return(
    <div>
      <Image src={image.src} />
      <br/>
      <TextBox string={text.string} />
      <br/>
    </div>
  );
// // this is also possible:
//   return(
//     DOM.div(
//       null,
//       React.createElement(Image, image),
//       React.createElement('br'),
//       React.createElement(TextBox, text),
//       React.createElement('br')
//     )
//   )
}
