import React, { useContext } from 'react';
import { ComposerContext } from '../context/ComposerContext';

const CoordinatesPanel = () => {
  const { elements } = useContext(ComposerContext);

  return (
    <div>
      <h3>📍 Coordinates</h3>
      <ul>
        {Object.entries(elements).map(([key, item]) => {
          if (key === 'bgImage') return null;
          return (
            <li key={key}>
              {key}: X = {item.x}px, Y = {item.y}px
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoordinatesPanel;
