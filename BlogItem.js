const BlogItem = ({ image, description }) => {
  return(
    <div>
      <Image {...image} />
      <br/>
      <TextBox>
        {description.text}
      </TextBox>
      <br/>
    </div>
  );
// // this is also possible:
//   return(
//     DOM.div(
//       null,
//       React.createElement(Image, image),
//       React.createElement('br'),
//       React.createElement(TextBox, null, description.text),
//       React.createElement('br')
//     )
//   )
}
