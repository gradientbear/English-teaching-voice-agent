# English Teaching Voice Agent

A simple, voice-focused React frontend for an AI-powered English teaching voice agent built with Vapi.

## Features

- 🎤 **Voice Chat Interface** - Practice speaking with AI English tutor
- 💬 **Text Chat Fallback** - Type messages when voice isn't available
- 🎯 **Simple UI** - Clean, focused interface for testing
- 🔧 **Vapi Integration Ready** - Configured for your assistant ID
- 📱 **Responsive Design** - Works on all devices
- 🔐 **Secure Configuration** - Uses environment variables for credentials

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Voice Integration**: Vapi AI (configured and ready)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd English-teaching-voice-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory with your Vapi credentials:
   ```env
   REACT_APP_VAPI_API_KEY=your_vapi_api_key_here
   REACT_APP_VAPI_ASSISTANT_ID=your_assistant_id_here
   REACT_APP_VAPI_BASE_URL=https://api.vapi.ai
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   └── VoiceChat.tsx   # Voice interaction component
├── types/              # TypeScript type definitions
│   └── index.ts        # Main type definitions
├── utils/              # Utility functions
│   └── vapiIntegration.ts  # Vapi integration helpers
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
├── index.css           # Global styles and Tailwind imports
└── config.ts           # Application configuration
```

## Components Overview

### VoiceChat
- Voice interaction interface
- Text input fallback
- Real-time conversation display
- Ready for Vapi integration

## Vapi Integration

The frontend is configured to use environment variables for Vapi credentials:

1. **Set your credentials** in the `.env` file
2. **Install Vapi SDK**: `npm install @vapi-ai/web`
3. **Update VoiceChat component** to use the Vapi integration
4. **Test voice interactions** with your English teaching assistant

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_VAPI_API_KEY` | Your Vapi API key | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| `REACT_APP_VAPI_ASSISTANT_ID` | Your assistant ID | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| `REACT_APP_VAPI_BASE_URL` | Vapi API base URL | `https://api.vapi.ai` |

## Usage

1. **Enable Voice Chat**: Click the microphone button to activate voice features
2. **Start Speaking**: Click the microphone in the input area to begin voice input
3. **Type Messages**: Use the text input as an alternative to voice
4. **Practice English**: Have conversations with your AI English tutor

## Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update color schemes in `src/index.css`
- Adjust component styles in `VoiceChat.tsx`

### Voice Features
- Integrate Vapi SDK in `src/components/VoiceChat.tsx`
- Add voice processing logic
- Implement audio recording and playback

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- Responsive design principles

## Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Automatic deployment from Git
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Static website hosting

## Test Project Notes

This is a simplified test project focused on:
- Voice interaction testing
- Basic chat interface
- Vapi integration preparation
- Minimal UI complexity

## Security Notes

- **Never commit `.env` files** to version control
- Use environment variables for all sensitive information
- Keep API keys private and secure
- Use different keys for development and production

## Support

For questions or support, please open an issue in the repository or contact the development team.

---

**Happy Testing! 🎓✨**