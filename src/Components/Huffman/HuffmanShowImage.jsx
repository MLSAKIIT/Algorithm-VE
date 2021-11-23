import React from "react";
import HuffmanImageItem from "./HuffmanImageItem";

const HuffmanShowImage = ({
  hasUploaded,
  originalImage,
  compressedImage,
  originalImageSize,
  compressedImageSize,
}) => {
  return (
    <div>
      {hasUploaded && (
        <div className="huffman-show-image">
          <HuffmanImageItem
            backgroundColor="black"
            heading="Your Image"
            image={originalImage}
            imageSize={originalImageSize}
            textColor="#fff"
          />
          <HuffmanImageItem
            backgroundColor="white"
            heading="Compressed Image"
            image={compressedImage}
            imageSize={compressedImageSize}
            textColor="#000"
          />
        </div>
      )}
    </div>
  );
};

export default HuffmanShowImage;
