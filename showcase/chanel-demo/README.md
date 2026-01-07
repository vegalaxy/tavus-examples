# Tavus Chanel Style Advisor Demo

## Your Personal AI Style Advisor
Welcome to the Tavus Chanel Demo, a luxury fashion showcase of [Conversational Video Interface (CVI)](https://docs.tavus.io/sections/conversational-video-interface/cvi-overview) technology. Experience an interactive, lifelike AI Style Advisor powered by Tavus CVI's real-time video interactions.

This demo demonstrates how Tavus can create sophisticated, brand-aligned conversational experiences with a minimalist, luxury aesthetic.

---

## 🍴 **Forking & Running the Demo**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Enter your Tavus API key** when prompted (get yours at [platform.tavus.io/api-keys](https://platform.tavus.io/api-keys))

---

## 🎨 **About This Demo**

This Chanel Style Advisor demo features:
- **Minimalist luxury design**: White background with black UI elements reflecting Chanel's timeless aesthetic
- **AI Style Advisor**: Conversational AI trained to provide personalized style recommendations
- **Real-time video interaction**: Live video conversations powered by Tavus CVI
- **Seamless user experience**: Smooth transitions and elegant animations

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

---

## 🔧 **Customize Your Experience**

Update the `persona_id` and `replica_id` in the `createConversation.ts` file to use your own persona:

```typescript
body: JSON.stringify({
  // Your custom Persona
  persona_id: "Pfc3b5159767",
  replica_id: "R2324e7fd788",
}),
```

### Design Customization

The demo uses a minimalist luxury design system:
- **Colors**: White (#FFFFFF) background with black (#000000) UI elements
- **Typography**: Helvetica Neue and Playfair Display fonts
- **Shadows**: Subtle, elegant shadows for depth
- **Layout**: Clean, spacious layout with premium feel

Customize these in `tailwind.config.ts` to match your brand.

---

## 📚 **Learn More About Tavus**

- [Developer Documentation](https://docs.tavus.io/)
- [API Reference](https://docs.tavus.io/api-reference/)
- [Tavus Platform](https://platform.tavus.io/)
- [Creating a Persona](https://docs.tavus.io/sections/conversational-video-interface/creating-a-persona)
- [Daily React Reference](https://docs.daily.co/reference/daily-react)
