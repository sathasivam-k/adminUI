import React, { useContext } from 'react';
import { ComposerContext } from '../context/ComposerContext';
import styled from 'styled-components';

const Canvas = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  margin: 20px auto;
  background-size: cover;
  background-position: center;
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

  return (
    <Canvas style={{ backgroundImage: `url(${elements.bgImage})` }}>
      {Object.entries(elements).map(([key, item]) => {
        if (key === 'bgImage') return null;
        if (item.src) {
          return <OverlayImage key={key} src={item.src} style={{ left: item.x, top: item.y }} />;
        } else if (item.text !== undefined) {
          return (
            <OverlayText
              key={key}
              style={{
                left: item.x,
                top: item.y,
                color: key.includes('gold') ? 'gold' : key.includes('silver') ? 'silver' : 'black',
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
