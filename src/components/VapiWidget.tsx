import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  config?: Record<string, unknown>;
}

const VapiWidget: React.FC<VapiWidgetProps> = ({ 
  apiKey, 
  assistantId, 
  config = {} 
}) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<Array<{role: string, text: string}>>([]);
  
  // Add ref for the messages container (not the page)
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to bottom of messages container only
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // Auto-scroll when transcript changes
  useEffect(() => {
    scrollToBottom();
  }, [transcript]);

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsConnected(true);
    });

    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsConnected(false);
      setIsSpeaking(false);
    });

    vapiInstance.on('speech-start', () => {
      console.log('Assistant started speaking');
      setIsSpeaking(true);
    });

    vapiInstance.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setIsSpeaking(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        setTranscript(prev => [...prev, {
          role: message.role,
          text: message.transcript
        }]);
      }
    });;

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
    
      if (error.errorMsg === 'Meeting has ended') {
        setIsConnected(false);
        setIsSpeaking(false);
        // Optional: show a UI alert or restart button
        alert('The meeting has ended. Please start a new session.');
      }
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  const startCall = () => {
    if (vapi) {
      vapi.start(assistantId);
    }
  };

  const endCall = () => {
    if (vapi) {
      if (vapi) {
        vapi.stop();
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        background: '#fff',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          margin: '0 0 8px 0',
          color: '#333',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          English Teaching Voice Agent
        </h1>
        <p style={{
          margin: '0',
          color: '#666',
          fontSize: '16px'
        }}>
          Practice English with your AI tutor powered by Vapi
        </p>
      </div>

      {/* Main Chat Area */}
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Messages Display - Fixed height with scrollbar */}
        <div 
          ref={messagesContainerRef}
          style={{
            height: '500px', // Fixed height instead of flex: 1
            background: '#fff',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            overflowY: 'auto',
            overflowX: 'hidden' // Prevent horizontal scrollbar
          }}
        >
          {transcript.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              color: '#666'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>
                🎤
              </div>
              <h3 style={{
                margin: '0 0 8px 0',
                color: '#333',
                fontSize: '20px'
              }}>
                Start Your English Practice
              </h3>
              <p style={{
                margin: '0',
                fontSize: '16px',
                lineHeight: '1.5'
              }}>
                Click the button below to begin speaking with your AI English tutor. 
                Your conversation will appear here as you practice.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {transcript.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div style={{
                    background: msg.role === 'user' ? '#12A594' : '#f0f0f0',
                    color: msg.role === 'user' ? '#fff' : '#333',
                    padding: '12px 16px',
                    borderRadius: '18px',
                    maxWidth: '70%',
                    wordWrap: 'break-word',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: msg.role === 'assistant' ? '1px solid #e0e0e0' : 'none'
                  }}>
                    <div style={{
                      fontSize: '16px',
                      lineHeight: '1.4'
                    }}>
                      {msg.text}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      marginTop: '8px',
                      opacity: 0.7,
                      textAlign: msg.role === 'user' ? 'right' : 'left'
                    }}>
                      {msg.role === 'user' ? 'You' : 'Assistant'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Control Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px'
        }}>
          {!isConnected ? (
            <button
              onClick={startCall}
              style={{
                background: '#12A594',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(18, 165, 148, 0.3)',
                transition: 'all 0.3s ease',
                minWidth: '200px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(18, 165, 148, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(18, 165, 148, 0.3)';
              }}
            >
              🎤 Start English Practice
            </button>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              background: '#fff',
              padding: '16px 24px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: isSpeaking ? '#ff4444' : '#12A594',
                  animation: isSpeaking ? 'pulse 1s infinite' : 'none'
                }}></div>
                <span style={{ 
                  fontWeight: 'bold', 
                  color: '#333',
                  fontSize: '16px'
                }}>
                  {isSpeaking ? 'Assistant Speaking...' : 'Listening...'}
                </span>
              </div>
              <button
                onClick={endCall}
                style={{
                  background: '#ff4444',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#e63939';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#ff4444';
                }}
              >
                End Session
              </button>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default VapiWidget;

