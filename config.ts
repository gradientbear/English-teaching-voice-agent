// Configuration for English Teaching Voice Agent
export const config = {
  app: {
    name: process.env.REACT_APP_APP_NAME || 'English Teaching Voice Agent',
    version: process.env.REACT_APP_APP_VERSION || '1.0.0',
    description: 'AI-powered English teaching voice agent powered by Vapi'
  },
  
  vapi: {
    // These should be set in your .env file
    apiKey: process.env.REACT_APP_VAPI_API_KEY || 'your_vapi_api_key_here',
    assistantId: process.env.REACT_APP_VAPI_ASSISTANT_ID || 'your_assistant_id_here',
    baseUrl: process.env.REACT_APP_VAPI_BASE_URL || 'https://api.vapi.ai'
  },
  
  features: {
    voice: true,
    textChat: true,
    simpleUI: true
  },
  
  ui: {
    theme: {
      primary: '#3b82f6',
      accent: '#22c55e',
      background: '#f8fafc'
    },
    animations: {
      enabled: true,
      duration: 200
    }
  }
};

export default config; 