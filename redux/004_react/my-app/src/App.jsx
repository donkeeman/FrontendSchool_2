import React from "react";
import { connect } from "react-redux";
import { addNumber,substractNumber } from "./store";

const App = ({ quantity, addNumber, substractNumber }) => {
  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>17,500</strong>원
      </span>
      <div id="counter-box">
        <button type="button" id="minus" onClick={substractNumber}>
          MINUS
        </button>
        <span id="number">{quantity}</span>
        <button id="plus" onClick={addNumber}>
          PLUS
        </button>
      </div>
      <div>
        총 수량 <strong id="quantity">{quantity}</strong>
      </div>
      <div>
        <strong id="total">{quantity * 17500}</strong>원
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { quantity: state };
}

const mapDisPatchToProps = (dispatch) => {
  return {
    addNumber: (text) => dispatch(addNumber(text)),
    substractNumber: (text) => dispatch(substractNumber(text)),
  };
}

export default connect(mapStateToProps, mapDisPatchToProps)(App);