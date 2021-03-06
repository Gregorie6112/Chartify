import React from 'react';

const PleaseType = (props) => (
  <>
  <h1 className="typeTicker">Please type a ticker or select an existing one:</h1>
  <input className="inputForTyping" id="typedValue" placeholder="Insert Ticker Here . . ." onKeyPress={() => props.getData(event)}></input>
  </>
);
export default PleaseType;