import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NavBar from './Navbar.jsx';
import BuySection from './BuySection.jsx';
import RenderChart from './RenderChart.jsx';
import PleaseType from './PleaseType.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      chart: 'as'
    }
    this.getData = this.getData.bind(this);
  }
  getData(event) {
    if (event.key === 'Enter') {
      let typedValue = document.getElementById('typedValue').value;
      document.getElementById('typedValue').value = '';
      console.log(typedValue)
    }
  }
  render() {
    return(
      <>
      <NavBar />
      <Container className="main-app" fluid>
        <Row className="mainSection">
          <Col id="chartSection" className="chartSection" xs={10} md={9} lg={10}>
            {(this.state.chart.length === 0) ?
            <PleaseType getData={this.getData}/> :
            <RenderChart />
            }
          </Col>
          <Col className="buySection" >
            <BuySection />
          </Col>
        </Row>
      </Container>
      </>
    )
  }
};
export default App;