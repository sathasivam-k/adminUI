// src/context/ComposerContext.js
import React, { createContext, useState } from 'react';

export const ComposerContext = createContext();

const initialElements = {
  bgImage: null,
  shopLogo: { src: null, x: 30, y: 30 },
  hallmarkLogo: { src: null, x: 50, y: 50 },
  goldTag: { src: null, x: 100, y: 100 },
  silverTag: { src: null, x: 150, y: 150 },
  title: { text: '', x: 200, y: 50 },
  address: { text: '', x: 200, y: 80 },
  date: { text: '', x: 200, y: 110 },
  goldText: { text: '', x: 200, y: 140 },
  silverText: { text: '', x: 200, y: 170 },
};

export const ComposerProvider = ({ children }) => {
  const [elements, setElements] = useState(initialElements);
  const [selectedKey, setSelectedKey] = useState(null);


  const moveElement = (direction) => {
    if (!selectedKey || !elements[selectedKey]) return;
    const step = 10;
    setElements((prev) => {
      const item = prev[selectedKey];
      const newItem = {
        ...item,
        x: direction === 'left' ? item.x - step : direction === 'right' ? item.x + step : item.x,
        y: direction === 'up' ? item.y - step : direction === 'down' ? item.y + step : item.y,
      };
      return { ...prev, [selectedKey]: newItem };
    });
  };

  return (
    <ComposerContext.Provider value={{ elements, setElements, selectedKey, setSelectedKey, moveElement, }}>
      {children}
    </ComposerContext.Provider>
  );
};
