import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment, Header, Container } from 'semantic-ui-react';
import Link from 'components/elements/Link';
import history from 'helpers/history';

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>Thinknetica React</Link>
    </Header>
  </Segment>
);

const BackButton = () => (
  <Button onClick={() => history.goBack()}>Back</Button>
);

const Footer = () => (
  <Segment>
    Per aspera ad astra
  </Segment>
);

const MainLayout = ({ children }) => (
  <Container>
    <Logo/>
    <BackButton/>
    { children }
    <Footer/>
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
