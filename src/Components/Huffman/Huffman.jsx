import React from "react";
import "../Huffman/Huffman.css";
import HuffmanNavbar from "./HuffmanNavbar";
import HuffmanHero from "./HuffmanHero";
import HuffmanUploadPic from "./HuffmanUploadPic";
import HuffmanShowImage from "./HuffmanShowImage";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

export default function Huffman() {
  return (
    <div className="huffman">
      <HuffmanNavbar />
      <HuffmanHero />

      <HuffmanUploadPic />

      <HuffmanShowImage />

      {/* <h1>Hello World!</h1> */}
    </div>
  );
}
