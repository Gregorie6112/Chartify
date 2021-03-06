import React from 'react';
import {Row, Col} from 'react-bootstrap';
import RenderTicker from './RenderTicker.jsx';

const BuySection = () => {
  return (
    <>
      <Col className="tickerSymbol">Symbol</Col>
      <Col className="buyButtonHolder">
        <button className="buyButton">BUY</button>
      </Col>
      <Col className="sellButtonHolder">
        <button className="sellButton">SELL</button>
      </Col>
      <Col className="renderTickers">
        <RenderTicker />
      </Col>
    </>
  )
};
export default BuySection;