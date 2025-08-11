import React from 'react';
import VapiWidget from './components/VapiWidget';

function App() {
  return (
    <div>
      {/* Pass your actual API key and assistant ID here */}
      <VapiWidget 
        apiKey="9b7c9770-b295-498c-b314-4d608b09ed40" 
        assistantId="2ac4baff-df4b-438d-a779-0847ee15f53e" 
      />
    </div>
  );
}

export default App;
