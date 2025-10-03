import React, { useContext } from 'react';
import { ComposerContext } from '../context/ComposerContext';

const MovementControls = () => {
  const { setSelectedKey, moveElement, elements } = useContext(ComposerContext);

  return (
    <div>
      <h3>🎯 Move Element</h3>
      <select onChange={(e) => setSelectedKey(e.target.value)}>
        <option value="">-- Select Element --</option>
        {Object.keys(elements).map((key) =>
          key !== 'bgImage' ? <option key={key} value={key}>{key}</option> : null
        )}
      </select>
      <div>
        <button onClick={() => moveElement('up')}>⬆️</button>
        <button onClick={() => moveElement('down')}>⬇️</button>
        <button onClick={() => moveElement('left')}>⬅️</button>
        <button onClick={() => moveElement('right')}>➡️</button>
      </div>
    </div>
  );
};

export default MovementControls;
