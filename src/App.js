import React from 'react';
import { ComposerProvider } from './context/ComposerContext';
import { GlobalStyles } from './styles/GlobalStyles';
import UploadPanel from './components/UploadPanel';
import TextPanel from './components/TextPanel';
import MovementControls from './components/MovementControls';
import CoordinatesPanel from './components/CoordinatesPanel';
import ImageCanvas from './components/ImageCanvas';

function App() {
  return (
    <ComposerProvider>
      <GlobalStyles />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>🛍️ Shop Image Composer</h2>
        <UploadPanel />
        <TextPanel />
        <MovementControls />
        <CoordinatesPanel />
        <ImageCanvas />
      </div>
    </ComposerProvider>
  );
}

export default App;
