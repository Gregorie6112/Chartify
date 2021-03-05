import React from 'react';
import {Container} from 'react-bootstrap';
import '../css/App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <Container className="main-app" fluid>App</Container>
    )
  }
};
export default App;