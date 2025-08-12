import React from 'react';
import VapiWidget from './components/VapiWidget';

function App() {
  return (
    <div>
      {/* Pass your actual API key and assistant ID here */}
      <VapiWidget 
        apiKey={process.env.REACT_APP_PUBLIC_API_KEY || ''}
        assistantId={process.env.REACT_APP_ASSISTANT_ID || ''}
      />
    </div>
  );
}

export default App;
