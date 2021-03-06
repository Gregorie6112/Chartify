import React from 'react';

const PleaseType = (props) => (
  <>
  <h1 className="typeTicker">Please type a ticker or select an existing one:
  <br /> Please be aware you must refresh the page after you add the ticker to see it persist.</h1>
  <input className="inputForTyping" id="typedValue" placeholder="Insert Ticker Here . . ." onKeyPress={() => props.getData(event)}></input>
  </>
);
export default PleaseType;