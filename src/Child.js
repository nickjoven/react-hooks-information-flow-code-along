import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

const Child = ({ onChangeColor, color }) => {
  const handlelick = () => {
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }
  return (
    <div
      onClick={handlelick}
      className='child'
      style={{ backgroundColor: color }}
    />
  )
}

export default Child;