# Suyash Vakhariya — 3D Aesthetic Portfolio

A premium, fully responsive 3D portfolio website with interactive AI cursor, glassmorphism effects, and immersive animations. Built with Next.js, React Three Fiber, Framer Motion, and TailwindCSS.

## ✨ Features

- **3D Interactive Elements**: React Three Fiber scene with animated 3D models
- **AI-Enhanced Cursor**: Custom cursor that reacts to elements, distorts backgrounds, and changes shape based on context
- **Glassmorphism Design**: Modern UI with backdrop blur effects and transparent layers
- **Smooth Animations**: Framer Motion powered micro-interactions and transitions
- **Fully Responsive**: Optimized for all screen sizes
- **Premium Aesthetics**: Cool color palette (blues, purples, cyans) with neon glows

## 🚀 Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Three.js / React Three Fiber** - 3D graphics
- **@react-three/drei** - 3D helpers and utilities
- **Lenis** - Smooth scrolling (optional, can be enabled)

## 📁 Project Structure

```
website suyash/
├── components/
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact form and info
│   ├── Cursor.jsx         # Interactive AI cursor
│   ├── Hero.jsx           # Hero section with 3D scene
│   ├── Projects.jsx       # Projects showcase
│   ├── Skills.jsx         # Skills section
│   └── ThreeScene.jsx     # 3D scene component
├── pages/
│   ├── _app.js            # Next.js app wrapper
│   └── index.js           # Main landing page
├── styles/
│   └── globals.css        # Global styles and utilities
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd "website suyash"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  coolBlue: '#0ea5e9',
  deepPurple: '#7c3aed',
  cyanGlow: '#06b6d4',
  warmAccent: '#ffb86b'
}
```

### 3D Scene

Modify `components/ThreeScene.jsx` to:
- Replace the torus knot with your own 3D model (glTF/GLB)
- Adjust lighting and camera positions
- Add more 3D elements

### Cursor Behavior

Edit `components/Cursor.jsx` to:
- Adjust cursor size and speed
- Modify hover effects
- Change glow colors

### Content

Update the following files with your information:
- `components/Hero.jsx` - Name, tagline, contact info
- `components/About.jsx` - About section text
- `components/Skills.jsx` - Skills array
- `components/Projects.jsx` - Projects array
- `components/Contact.jsx` - Contact information

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Or any Node.js hosting service

Build command: `npm run build`
Start command: `npm run start`

## 🔧 Optional Enhancements

### Enable Lenis Smooth Scroll

Uncomment the Lenis initialization code in `pages/_app.js`:

```javascript
import('lenis').then((Lenis) => {
  const lenis = new Lenis.default({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // ... other options
  })
  // ... rest of the code
})
```

### Add Form Backend

Connect the contact form to a service like:
- Formspree
- Netlify Forms
- EmailJS
- Your own API endpoint

### Add Custom 3D Models

1. Export your 3D model as glTF/GLB
2. Place it in `public/models/`
3. Import and use in `ThreeScene.jsx`:

```javascript
import { useGLTF } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/your-model.glb')
  return <primitive object={scene} />
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and personal.

## 👤 Author

**Suyash Vakhariya**
- Phone: +91 9356179232
- Email: vakhariyasuyash@gmail.com
- LinkedIn: [suyashvakhariya](https://www.linkedin.com/in/suyashvakhariya)

---

Built with ❤️ using Next.js, React Three Fiber, and Framer Motion.

