import React from 'react'
import { changeColor } from "../actions/colorAction";
import { useSelector, useDispatch } from "react-redux";

const Color = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);

  return (
    <div>
      <h1 onClick={() => dispatch(changeColor())} style={{ color: color }}>ChangeColor {color}
      </h1>
    </div>
  );
}

export default Color

