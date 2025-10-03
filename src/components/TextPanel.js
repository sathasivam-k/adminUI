import React, { useContext } from 'react';
import { ComposerContext } from '../context/ComposerContext';

const textKeys = ['title', 'address', 'date', 'goldText', 'silverText'];

const TextPanel = () => {
  const { setElements } = useContext(ComposerContext);

  const handleTextChange = (key, e) => {
    const text = e.target.value;
    setElements((prev) => ({
      ...prev,
      [key]: { ...prev[key], text },
    }));
  };

  return (
    <div>
      <h3>✍️ Enter Text</h3>
      {textKeys.map((key) => (
        <label key={key}>
          {key}:
          <input type="text" onChange={(e) => handleTextChange(key, e)} />
        </label>
      ))}
    </div>
  );
};

export default TextPanel;
