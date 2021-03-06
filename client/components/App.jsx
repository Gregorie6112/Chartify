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
      chart: '',
      x: [],
      y: [],
      tickers: ['No Tickers']
    }
    this.getData = this.getData.bind(this);
    this.newSearch = this.newSearch.bind(this);
    this.updateBackend = this.updateBackend.bind(this);
    this.clickedTicker = this.clickedTicker.bind(this);
  }
  componentDidMount() {
    let tickersInDb = [];
    Axios.get('/tickers')
      .then(({data}) => {
        data.map((el, index) => {
          tickersInDb.push(el.ticker)
        })
        this.setState({
          tickers: tickersInDb
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  updateBackend(string) {
    let APIcall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${string}&apikey=KGGKYTO460K54GFB`;
    if (string === 'BTC') {
      APIcall = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=KGGKYTO460K54GFB`;
    }
    let xAxis = [];
    let yAxis = [];
    Axios.get(APIcall)
      .then(({ data }) => {
        console.log(data)
        let newData = data["Time Series (Daily)"];
        if (string === 'BTC') {
          newData = data["Time Series (Digital Currency Daily)"];
        }
        for (var key in newData) {
          if (string === 'BTC') {
            xAxis.push(key);
            yAxis.push(newData[key]["2b. high (USD)"])
          } else {
            xAxis.push(key.split(" ")[0]);
            yAxis.push(newData[key]["2. high"]);
          }
        }
        this.setState({
          chart: string,
          x: xAxis,
          y: yAxis
        })
        Axios.put('/updateticker', { ticker: string, xAxis, yAxis })
          .then(() => {
            console.log('Updated')
          })
          .catch((err) => {
            console.log(err)
          })
      })
      return;
  }
  getData(event) {
    if (event.key === 'Enter') {
      let typedValue = document.getElementById('typedValue').value.toUpperCase();
      document.getElementById('typedValue').value = '';
      if (this.state.tickers.indexOf(typedValue) !== -1 ) {
        this.updateBackend(typedValue)
        return;
      }
      console.log(this.state.tickers.indexOf(typedValue))
      let APIcall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${typedValue}&apikey=KGGKYTO460K54GFB`;
      let xAxis = [];
      let yAxis = [];
      Axios.get(APIcall)
        .then(({data}) => {
          if (data["Error Message"]) {
            let box = document.getElementById('typedValue').style;
            box.border = '1px solid #ff5555';
            return;
          }
          let newData = data["Time Series (Daily)"];
          for (var key in newData) {
            xAxis.push(key.split(" ")[0]);
            yAxis.push(newData[key]["2. high"]);
          }
          this.setState({
            chart: typedValue,
            x: xAxis,
            y: yAxis
          })
          Axios.post('/ticker', {ticker: typedValue, xAxis, yAxis})
           .then(() => {
             console.log('Stored in db')
           })
           .catch((err) => {
             console.log('Error in post')
           })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  newSearch() {
    this.setState({
      chart: ''
    })
  }
  clickedTicker(clickedName) {
    Axios.get(`/oneticker/${clickedName}`)
      .then(({data}) => {
        this.setState({
          chart: clickedName,
          x: data[0].xAxis,
          y: data[0].yAxis
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return(
      <>
      <NavBar newSearch={this.newSearch}/>
      <Container className="main-app" fluid>
        <Row className="mainSection">
          <Col id="chartSection" className="chartSection" xs={10} md={9} lg={10}>
            {(this.state.chart.length === 0) ?
            <PleaseType getData={this.getData}/> :
            <RenderChart x={this.state.x} y={this.state.y}/>
            }
          </Col>
          <Col className="buySection" >
            <BuySection clickedTicker={this.clickedTicker} ticker={this.state.chart} tickers={this.state.tickers}/>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
};
export default App;