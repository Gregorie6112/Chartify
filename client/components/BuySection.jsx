import React from 'react';
import {Row, Col} from 'react-bootstrap';
import RenderTicker from './RenderTicker.jsx';

const BuySection = (props) => {
  return (
    <>
      <Col className="tickerSymbol">{(props.ticker.length > 0) ? props.ticker : 'Symbol'}</Col>
      <Col className="buyButtonHolder">
        <button className="buyButton">BUY</button>
      </Col>
      <Col className="sellButtonHolder">
        <button className="sellButton">SELL</button>
      </Col>
      <Col className="renderTickers">
        <RenderTicker clickedTicker={props.clickedTicker} tickers={props.tickers}/>
      </Col>
    </>
  )
};
export default BuySection;