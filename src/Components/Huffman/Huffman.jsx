import React from "react";
import "../Huffman/Huffman.css";
import HuffmanNavbar from "./HuffmanNavbar";
import HuffmanHero from "./HuffmanHero";

export default function Huffman() {
  return (
    <div className="huffman">
      <HuffmanNavbar />
      <HuffmanHero />
      <h1>Hello World!</h1>
    </div>
  );
}
