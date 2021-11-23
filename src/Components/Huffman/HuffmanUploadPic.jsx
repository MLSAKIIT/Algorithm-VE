import React, { useState } from "react";
import { Form } from "react-bootstrap";
import HuffmanShowImage from "./HuffmanShowImage";

const HuffmanUploadPic = () => {
  const [hasUploaded, setHasUploaded] = useState(false);
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [originalImageSize, setOriginalImageSize] = useState(0);
  const [compressedImageSize, setCompressedImageSize] = useState(0);
  const handleUploadClick = (ev) => {
    ev.preventDefault();
    // console.log("clicked");
    // console.log(selectedFile);

    const MAX_WIDTH = 320;
    const MAX_HEIGHT = 180;
    const MIME_TYPE = "image/jpeg";
    const QUALITY = 0.7;

    // const input = document.getElementById("img-input");
    // input.onchange = function (ev) {
    const file = ev.target.files[0]; // get the file
    setHasUploaded(true);
    setOriginalImage(file);
    // document.getElementById("huffman-12345").append(file);
    // setOriginalImageSize(file.size);
    console.log(file);
    const blobURL = URL.createObjectURL(file);
    const img = new Image();
    img.src = blobURL;
    img.onerror = function () {
      URL.revokeObjectURL(this.src);
      // Handle the failure properly
      console.log("Cannot load image");
    };
    img.onload = function () {
      URL.revokeObjectURL(this.src);
      const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
      console.log(newWidth, newHeight);
      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      canvas.toBlob(
        (blob) => {
          // Handle the compressed image. es. upload or save in local state
          setOriginalImageSize(displayInfo(file));
          setCompressedImageSize(displayInfo(blob));
        },
        MIME_TYPE,
        QUALITY
      );

      setCompressedImage(canvas);
      // document.getElementById("huffman-12345").append(canvas);
    };

    function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;

      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }

    // Utility functions for demo purpose

    function displayInfo(file) {
      // const p = document.createElement("p");
      // p.innerText = `${label} - ${readableBytes(file.size)}`;
      // document.getElementById("root").append(p);

      return `${readableBytes(file.size)}`;
    }

    function readableBytes(bytes) {
      const i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
    }
  };

  // const fileHandler = (event) => {
  //   console.log(event.target.files[0]);
  // };

  //   const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="huffman-upload-pic-container">
      <div className="huffman-upload-text">Upload your image</div>
      <form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            type="file"
            // value={selectedFile}
            onChange={handleUploadClick}
          />
        </Form.Group>

        <button
          onClick={(e) => e.preventDefault()}
          // onSubmit={handleUploadClick}
          type="submit"
        >
          Upload
        </button>
      </form>

      <div
        className="huffman-upload-bottom-svg"
        style={{ visibility: "hidden" }}
      >
        <svg
          width="280"
          height="252"
          viewBox="0 0 280 252"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.78721 29.6116C1.63712 15.6929 12.5039 4.34963 25.9632 4.2045L250.838 1.77966C264.297 1.63453 275.406 12.7408 275.556 26.6595L277.663 222.044C277.813 235.963 266.946 247.306 253.487 247.451L28.6123 249.876C15.153 250.021 4.04415 238.915 3.89406 224.996L1.78721 29.6116ZM83.4221 18.3491L26.1224 18.9669C20.4999 19.0276 16.0242 23.7821 16.0854 29.4574L16.1453 35.0081C16.1735 37.6305 18.2912 39.8159 20.9406 39.7873L83.646 39.1111C86.2954 39.0826 88.3655 36.8521 88.3372 34.2297L88.2175 23.1283C88.1892 20.5058 86.0716 18.3205 83.4221 18.3491ZM21.3237 75.3118L257.009 72.7704C259.659 72.7418 261.729 70.5113 261.701 67.8889L261.258 26.8137C261.196 21.1384 256.619 16.4815 250.997 16.5421L114.342 18.0156C112.752 18.0328 111.257 18.863 110.4 20.248L94.7873 44.873L21.0041 45.6686C18.3546 45.6972 16.2846 47.9277 16.3129 50.5501L16.5283 70.5326C16.5566 73.1551 18.6743 75.3404 21.3237 75.3118ZM73.6447 153.187C74.0495 190.723 104.096 220.975 140.747 220.58C177.398 220.185 206.785 189.292 206.38 151.756C205.975 114.219 175.929 83.9678 139.278 84.363C102.627 84.7582 73.24 115.651 73.6447 153.187ZM93.9426 152.968C93.6608 126.838 114.15 105.398 139.502 105.125C164.853 104.852 185.8 125.844 186.082 151.975C186.364 178.105 165.875 199.544 140.523 199.818C115.171 200.091 94.2243 179.098 93.9426 152.968ZM103.916 152.861C103.977 158.536 108.555 163.193 114.177 163.132C119.8 163.072 124.275 158.317 124.214 152.642C124.117 143.663 131.189 136.302 139.837 136.209C145.459 136.148 149.935 131.394 149.874 125.719C149.813 120.043 145.236 115.386 139.613 115.447C119.666 115.662 103.696 132.476 103.916 152.861Z"
            fill="#43D76C"
            stroke="black"
            stroke-width="3"
          />
        </svg>
      </div>
      <HuffmanShowImage
        hasUploaded={hasUploaded}
        originalImage={originalImage}
        compressedImage={compressedImage}
        originalImageSize={originalImageSize}
        compressedImageSize={compressedImageSize}
      />
    </div>
  );
};

export default HuffmanUploadPic;
