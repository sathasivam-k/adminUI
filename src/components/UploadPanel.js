import React, { useContext } from 'react';
import { ComposerContext } from '../context/ComposerContext';

const imageKeys = ['shopLogo', 'hallmarkLogo', 'goldTag', 'silverTag'];

const UploadPanel = () => {
  const { setElements } = useContext(ComposerContext);

  const handleUpload = (key, e) => {
    const file = e.target.files[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setElements((prev) => ({
        ...prev,
        [key]: { ...prev[key], src },
      }));
    }
  };

  const handleBgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setElements((prev) => ({ ...prev, bgImage: src }));
    }
  };


  return (
    <div>
      <h3>🖼️ Upload Images</h3>
      <label>Background Image: <input type="file" onChange={handleBgUpload} /></label>
      {imageKeys.map((key) => (
        <label key={key}>
          {key}:
          <input type="file" onChange={(e) => handleUpload(key, e)} />
        </label>
      ))}
    </div>
  );
};

export default UploadPanel;
