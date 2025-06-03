# Google Gemini AI Setup Guide

This guide will help you set up Google Gemini AI for enhanced RFP analysis.

## 1. Get Your Gemini API Key

1. **Go to Google AI Studio**: https://aistudio.google.com/app/apikey
2. **Sign in** with your Google account
3. **Create a new API key** or use an existing one
4. **Copy the API key** - you'll need it for the next step

## 2. Set Up Environment Variables

### Option A: Environment Variables File (.env.local)

Create a file called `.env.local` in the `frontend` directory with:

```env
GOOGLE_GEMINI_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
```

### Option B: System Environment Variables

Set the environment variable in your system:

**Windows:**
```cmd
set GOOGLE_GEMINI_API_KEY=your_actual_api_key_here
```

**macOS/Linux:**
```bash
export GOOGLE_GEMINI_API_KEY=your_actual_api_key_here
```

## 3. Restart the Development Server

After adding the API key, restart your development server:

```bash
npm run dev
```

## 4. Test AI Analysis

1. **Upload an RFP document** or use one of the downloaded templates
2. **Toggle the AI Analysis switch** (🤖 AI Analysis) 
3. **Click "Analyze RFP"**
4. **View the enhanced AI-powered results**

## Features of AI Analysis

- **Context-aware insights** using Google's Gemini 1.5 Flash model
- **Natural language recommendations** 
- **Sophisticated pattern recognition**
- **Compliance and risk assessment**
- **Actionable improvement suggestions**

## Troubleshooting

### "API key not configured" Error
- Make sure you've added the API key to your environment variables
- Restart the development server after adding the key
- Check that the key is valid and not expired

### API Rate Limits
- Gemini has generous free tier limits
- For production use, consider upgrading to a paid plan

### Network Issues
- Ensure you have internet connectivity
- Check if your firewall allows outbound HTTPS requests

## API Usage & Costs

- **Free tier**: 15 requests per minute, 1,500 requests per day
- **Paid tier**: Higher limits available
- **Model used**: gemini-1.5-flash (optimized for speed and efficiency)

For current pricing, visit: https://ai.google.dev/pricing

## Security Notes

- **Never commit** your API key to version control
- **Use environment variables** for production deployments
- **Rotate your API key** regularly for security
- **Monitor usage** in Google AI Studio

## Support

- **Google AI Documentation**: https://ai.google.dev/docs
- **API Reference**: https://ai.google.dev/api
- **Community Support**: https://developers.googleblog.com/ 