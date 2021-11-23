import React from "react";
import "./Huffman.css";
import ImageGIF from "../../Assets/63534-image-preloader.gif";
import { Link } from "react-router-dom";
import HuffmanUploadPic from "./HuffmanUploadPic";
const HuffmanHero = () => {
  return (
    <div>
      <div className="huffman-hero">
        <div className="huffman-hero-left-block">
          <img src={ImageGIF} alt="huffmasn-hero-animation" />
        </div>
        <div className="huffman-hero-right-block">
          <div className="huffman-hero-text-container">
            <h2>Compress Images Using Huffman Encoding</h2>

            <div className="huffman-hero-right-para">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus at nulla rem. Ullam, at voluptas reprehenderit odit
                molestiae autem nam.
              </p>
            </div>

            <Link to="/huffman/upload">
              <div className="huffman-button-container">
                <button>Get Started</button>

                {/* <button>View Gallery</button> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuffmanHero;
