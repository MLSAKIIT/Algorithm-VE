import React from 'react';
import "./Box.css";
const Box =({isStart,isEnd,row,col})=>{
    const classes = isStart ? "box-start" : isEnd ? "box-end":"";

   return <div className={`box ${classes}`}id={`box-${row}-${col}`} ></div>

   
};
export default Box;
