import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Container } from 'semantic-ui-react';
import Link from 'components/elements/Link';

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>Thinknetica React</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Per aspera ad astra
  </Segment>
);

const MainLayout = ({ children }) => (
  <Container>
    <Logo/>
    { children }
    <Footer/>
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
