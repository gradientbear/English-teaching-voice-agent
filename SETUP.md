# Setup Instructions

## Environment Variables Setup

To use this application, you need to create a `.env` file in the root directory with your Vapi credentials.

### 1. Create .env file

Create a file named `.env` in the root directory (`E:\Work\AI\English-teaching-voice-agent\.env`) with the following content:

```env
# Vapi Configuration
REACT_APP_VAPI_API_KEY=c0abe865-469a-459a-a2f3-04676e6119c3
REACT_APP_VAPI_ASSISTANT_ID=8eef9b82-8252-4ca6-a786-1deeb70c93c6
REACT_APP_VAPI_BASE_URL=https://api.vapi.ai

# App Configuration
REACT_APP_APP_NAME=English Teaching Voice Agent
REACT_APP_APP_VERSION=1.0.0
```

### 2. Important Notes

- **Never commit the `.env` file** to version control
- The `.env` file should be in the same directory as `package.json`
- All environment variables must start with `REACT_APP_` to be accessible in React
- Restart the development server after creating the `.env` file

### 3. Verify Configuration

After creating the `.env` file, restart your development server:

```bash
npm start
```

The application will now use your actual Vapi credentials instead of placeholder values.

### 4. Security Best Practices

- Keep your API keys private
- Use different API keys for development and production
- Regularly rotate your API keys
- Monitor API usage to detect unauthorized access 