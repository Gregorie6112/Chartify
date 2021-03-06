import React from 'react';

const RenderTicker = (props) => (
  <>
  {(props.tickers.length > 0) ?
  props.tickers.map((el, index) => (
  <div className="tickerHolder" key={index} onClick={() => props.clickedTicker(el)}>
    {el}
  </div>
  )) :
  <div className="tickerHolder">
    No tickers
  </div>
  }
  </>
);
export default RenderTicker;