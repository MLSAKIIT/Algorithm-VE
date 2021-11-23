import React from "react";
import "./Huffman.css";
const HuffmanImageItem = ({
  heading,
  backgroundColor,
  textColor,
  image,
  imageSize,
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "50vw",
        color: textColor,
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>{heading}</h2>
      {/* <div
        className="huffman-image-sample"
        id="huffman-12345"
        style={{ color: "#000" }}
      >
        <img src={image} alt="huffman-pic-display" style={{ width: "50px" }} />
      </div> */}

      <h3 style={{ marginTop: "30px" }}>Size: {imageSize} </h3>
    </div>
  );
};

export default HuffmanImageItem;
