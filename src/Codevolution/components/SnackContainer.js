import React, {useState} from "react";
import { connect } from "react-redux";
import { buySnack } from "../redux";

const SnackContainer = (props) => {
  const [number, setNumber] = useState(0)
  const getNumber = (e) => {
    setNumber(e.target.value)
  }

  return (
    <div>
      <h2>Number of Snacks {props.numOfSnacks} </h2>
      <input type="text" value={number} onChange={getNumber} />
      <button onClick={() => props.buySnack(number)}>Buy {number} Snack {} </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfSnacks: state.snack.numOfSnacks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buySnack: (number) => dispatch(buySnack(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SnackContainer);
