import React, { useContext, useEffect, useState } from 'react';
import { ComposerContext } from '../context/ComposerContext';
import styled from 'styled-components';

const Canvas = styled.div`
  position: relative;
  margin: 20px auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  border: 2px solid #aaa;
`;

const OverlayImage = styled.img`
  position: absolute;
  width: 100px;
`;

const OverlayText = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 16px;
`;

const ImageCanvas = () => {
  const { elements } = useContext(ComposerContext);
  const [bgSize, setBgSize] = useState({ width: 800, height: 800 });

  useEffect(() => {
    if (elements.bgImage) {
      const img = new Image();
      img.src = elements.bgImage;
      img.onload = () => {
        const { naturalWidth, naturalHeight } = img;

        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        const widthRatio = MAX_WIDTH / naturalWidth;
        const heightRatio = MAX_HEIGHT / naturalHeight;
        const scale = Math.min(widthRatio, heightRatio, 1); // Prevent upscaling

        setBgSize({
          width: Math.round(naturalWidth * scale),
          height: Math.round(naturalHeight * scale),
        });
      };
    }
  }, [elements.bgImage]);
  console.log(bgSize);

  return (
    <Canvas
      style={{
        width: `${bgSize.width}px`,
        height: `${bgSize.height}px`,
        backgroundImage: `url(${elements.bgImage})`,
      }}
    >
      
      {Object.entries(elements).map(([key, item]) => {
        if (key === 'bgImage') return null;

        if (item.src) {
          return (
            <OverlayImage
              key={key}
              src={item.src}
              style={{ left: item.x, top: item.y }}
            />
          );
        }

        if (item.text !== undefined) {
          return (
            <OverlayText
              key={key}
              style={{
                left: item.x,
                top: item.y,
                color: key.includes('gold')
                  ? 'gold'
                  : key.includes('silver')
                  ? 'silver'
                  : 'black',
              }}
            >
              {item.text}
            </OverlayText>
          );
        }

        return null;
      })}
    </Canvas>
  );
};

export default ImageCanvas;