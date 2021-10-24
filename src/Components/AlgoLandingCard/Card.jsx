import React from "react";

const Card = (props) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "200px",
          height: "300px",
          backgroundColor: props.backgroundColor,
          transform: `translate(${props.translateX},${props.translateY})`,
          borderRadius: "0",
        }}
      >
        <h3
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "1.5rem",
          }}
        >
          {props.algorithmName}
        </h3>
      </div>
    </div>
  );
};

export default Card;
