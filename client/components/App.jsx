import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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
        <Row className="mainSection">
          <Col className="chartSection" xs={9} md={9} lg={10}></Col>
          <Col className="buySection" ></Col>
        </Row>
      </Container>
      </>
    )
  }
};
export default App;