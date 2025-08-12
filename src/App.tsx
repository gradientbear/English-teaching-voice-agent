import React from 'react';
import VapiWidget from './components/VapiWidget';

function App() {
  return (
    <div>
      <VapiWidget 
        apiKey={process.env.REACT_APP_PUBLIC_API_KEY || ''}
        assistantId={process.env.REACT_APP_ASSISTANT_ID || ''}
      />
    </div>
  );
}

export default App;
