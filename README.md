# 🔥 AI Girlfriend WebApp

A beautiful, modern AI Girlfriend application built with Next.js and deployed on Vercel. Features a dark theme, smooth animations, and a complete user journey from selection to premium conversion.

## ✨ Features

- 🌟 **Beautiful Landing Page** - 4 AI girlfriends with unique personalities and smooth animations
- 💬 **Interactive Onboarding** - 3-step flirty conversation flow
- 💕 **Real-time Chat Interface** - Message bubbles, typing indicators, and AI responses  
- 🔒 **Trial System** - 10 free messages before premium paywall
- 💎 **Premium Paywall** - Emotional $15/month upgrade flow with PayPal & Card options
- 📱 **Fully Responsive** - Works perfectly on mobile and desktop
- ⚡ **Optimized Performance** - Fast loading, zero white screen issues
- 🎨 **Modern Dark Theme** - Professional blue gradient design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aigf-webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

## 📁 Project Structure

```
📂 AIGF-WebApp/
├── 📄 package.json           # Dependencies & scripts
├── 📄 next.config.js         # Next.js production config  
├── 📄 tailwind.config.js     # Dark theme & animations
├── 📄 vercel.json            # Vercel deployment config
├── 📄 postcss.config.js      # PostCSS configuration
├── 📂 pages/
│   ├── 📄 index.js           # Landing page with girl selection
│   ├── 📄 onboarding.js      # 3-step flirty onboarding
│   ├── 📄 chat.js            # Chat interface with trial limit
│   ├── 📄 _app.js            # Next.js app wrapper
│   └── 📄 _document.js       # HTML document configuration
├── 📂 components/
│   ├── 📄 GirlCard.js        # Interactive girl selection cards
│   ├── 📄 SubscriberCounter.js # FOMO live counter
│   └── 📄 Paywall.js         # $15/month premium upgrade modal
├── 📂 styles/
│   └── 📄 globals.css        # Global styles & animations
└── 📄 README.md              # This file
```

## 🎮 User Journey

### 1. **Landing Page** (`/`)
- Beautiful hero section with gradient title
- Live subscriber counter (FOMO effect)
- 4 AI girlfriend cards with hover animations
- Trust indicators (4.9/5 rating, 100% secure, etc.)

### 2. **Girl Selection** 
- Click any girl card to select
- Smooth transition to onboarding
- Girl data stored in localStorage

### 3. **Onboarding Flow** (`/onboarding`)
- **Step 1:** "Hey there! 😊 What's your name?"
- **Step 2:** "Want to give me a special name?"  
- **Step 3:** "Tell me about your hobbies!"
- Typing animations between steps
- Progress bar with animated dots

### 4. **Chat Interface** (`/chat`)
- Real-time messaging with AI responses
- Trial counter (10 free messages)
- Typing indicators and smooth animations
- Message history and auto-scroll

### 5. **Premium Paywall**
- Triggered after 10 messages
- Emotional messaging: "Oh... 😢 I don't want to stop talking to you"
- $15/month pricing with PayPal & Card options
- Success animation and unlimited messaging

## 🎨 Design Features

### Dark Theme
- Professional dark gradient background
- Blue accent colors (#3b82f6)
- Glass morphism effects with blur
- Smooth shadows and borders

### Animations
- Framer Motion powered transitions
- Hover effects on all interactive elements
- Loading states and micro-interactions
- Typing indicators and message bubbles

### Mobile Optimization
- Responsive grid layouts
- Touch-friendly buttons and inputs
- Optimized font sizes and spacing
- Smooth scrolling and gestures

## ⚙️ Configuration

### Environment Variables
Create `.env.local` for additional configuration:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Customization

#### Add More AI Girls
Edit `pages/index.js`:

```javascript
const aiGirls = [
  {
    id: 'new-girl',
    name: 'New Girl',
    age: 24,
