import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import NavBar from './Navbar.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <>
      <NavBar />
      <Container className="main-app" fluid>
        APP
      </Container>
      </>
    )
  }
};
export default App;