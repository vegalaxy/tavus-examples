# Tavus Chanel Style Advisor Demo

## Your Personal AI Style Advisor
Welcome to the Tavus Chanel Demo, a luxury fashion showcase of [Conversational Video Interface (CVI)](https://docs.tavus.io/sections/conversational-video-interface/cvi-overview) technology. Experience an interactive, lifelike AI Style Advisor powered by Tavus CVI's real-time video interactions.

This demo demonstrates how Tavus can create sophisticated, brand-aligned conversational experiences with a minimalist, luxury aesthetic.

---

## 🚀 **Quick Deploy to Netlify**

Deploy this demo to Netlify in one click:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vegalaxy/tavus-examples)

**After deployment:**
1. Go to **Site settings** → **Environment variables**
2. Add `VITE_TAVUS_API_KEY` with your Tavus API key
3. Trigger a new deploy to apply the environment variable

---

## 🛠️ **Local Development Setup**

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Tavus API key from [platform.tavus.io/api-keys](https://platform.tavus.io/api-keys)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vegalaxy/tavus-examples.git
   cd tavus-examples/showcase/chanel-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the `chanel-demo` directory:
   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your Tavus API key:
   ```
   VITE_TAVUS_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

---

## 🌐 **Deployment**

### Netlify Deployment

This project includes a `netlify.toml` configuration file for easy deployment.

#### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

When prompted, set the build command to `npm run build` and publish directory to `dist`.

#### Option 2: Deploy via Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click **Add new site** → **Import an existing project**
4. Connect your repository
5. Configure build settings:
   - **Base directory**: `showcase/chanel-demo`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Add environment variable:
   - **Key**: `VITE_TAVUS_API_KEY`
   - **Value**: Your Tavus API key
7. Click **Deploy site**

#### Option 3: Deploy via Netlify UI (Manual Upload)

```bash
# Build the project
npm run build

# The dist folder is ready to be deployed
```

Then drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

**Important:** Don't forget to add the `VITE_TAVUS_API_KEY` environment variable in your Netlify site settings!

---

## 🎨 **About This Demo**

This Chanel Style Advisor demo features:
- **Minimalist luxury design**: White background with black UI elements reflecting Chanel's timeless aesthetic
- **AI Style Advisor**: Conversational AI trained to provide personalized style recommendations
- **Real-time video interaction**: Live video conversations powered by Tavus CVI
- **Seamless user experience**: Smooth transitions and elegant animations
- **Static intro video**: Avatar introduction before interactive conversation

---

## ⚙️ **How It Works**

**What exactly is a Tavus Persona?**

A [Tavus Persona](https://docs.tavus.io/sections/conversational-video-interface/creating-a-persona) is a customizable AI character that defines the behavior, voice, and appearance of your digital agent. This demo uses a Chanel Style Advisor persona configured with:

- **Persona ID**: `Pfc3b5159767`
- **Replica ID**: `R2324e7fd788`
- **Theme**: Luxury fashion style advisor with minimalist design

**The Chanel Demo stack includes:**
- React 18
- TypeScript
- Vite
- Tailwind CSS (customized for Chanel aesthetic)
- Framer Motion
- Tavus CVI API
- Daily.co for video infrastructure

---

## 🔧 **Customization**

### Update Tavus Persona

Edit `src/api/createConversation.ts` to use your own persona:

```typescript
body: JSON.stringify({
  // Your custom Persona
  persona_id: "your_persona_id",
  replica_id: "your_replica_id",
}),
```

### Design Customization

The demo uses a minimalist luxury design system defined in `tailwind.config.ts`:
- **Colors**: White (#FFFFFF) background with black (#000000) UI elements
- **Typography**: Helvetica Neue and Playfair Display fonts
- **Shadows**: Subtle, elegant shadows for depth
- **Layout**: Clean, spacious layout with premium feel

### Add Intro Video

Place your avatar introduction video at:
```
public/videos/chanel-intro.mp4
```

The video will play automatically when users click "Meet Your Style Advisor" and transition to the conversation when finished.

---

## 📁 **Project Structure**

```
chanel-demo/
├── public/
│   ├── videos/          # Place intro video here
│   └── images/          # Static assets
├── src/
│   ├── api/             # Tavus API integration
│   ├── components/      # React components
│   ├── screens/         # Screen components
│   │   ├── Intro.tsx
│   │   ├── StaticIntroVideo.tsx
│   │   ├── Instructions.tsx
│   │   └── Conversation.tsx
│   ├── store/           # Jotai state management
│   └── config/          # Configuration
├── .env                 # Environment variables (local only)
├── .env.example         # Environment template
├── netlify.toml         # Netlify configuration
└── package.json
```

---

## 🔐 **Environment Variables**

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TAVUS_API_KEY` | Your Tavus API key from [platform.tavus.io](https://platform.tavus.io/api-keys) | Yes |

**Security Note:** Never commit your `.env` file to version control. The `.env` file is already in `.gitignore`.

---

## 🐛 **Troubleshooting**

### API Key Not Working
- Ensure the environment variable is named exactly `VITE_TAVUS_API_KEY`
- After changing environment variables, restart your dev server
- On Netlify, trigger a new deploy after adding environment variables

### Build Fails
- Check Node.js version (requires v18+)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

### Video Not Loading
- Ensure your intro video is at `public/videos/chanel-intro.mp4`
- Check video format (MP4 recommended)

---

## 📚 **Learn More About Tavus**

- [Developer Documentation](https://docs.tavus.io/)
- [API Reference](https://docs.tavus.io/api-reference/)
- [Tavus Platform](https://platform.tavus.io/)
- [Creating a Persona](https://docs.tavus.io/sections/conversational-video-interface/creating-a-persona)
- [Daily React Reference](https://docs.daily.co/reference/daily-react)

---

## 📄 **License**

This demo is provided as-is for demonstration purposes.

## 🤝 **Support**

For issues with:
- **Tavus API**: Contact [Tavus Support](https://tavus.io)
- **This demo**: Open an issue on GitHub
