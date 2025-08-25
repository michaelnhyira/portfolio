# Setup Guide for Michael Haven Portfolio

## 🚀 Quick Start (HTML Version)

If you want to see the portfolio immediately without installing Node.js, you can open the original `homepage.html` file in your browser. However, for the full modern experience with animations and dark mode, follow the setup below.

## 📋 Prerequisites

### 1. Install Node.js
- Go to [https://nodejs.org/](https://nodejs.org/)
- Download the LTS version (recommended for most users)
- Run the installer and follow the setup wizard
- Verify installation by opening a new terminal/command prompt and running:
  ```bash
  node --version
  npm --version
  ```

### 2. Install Git (Optional but recommended)
- Download from [https://git-scm.com/](https://git-scm.com/)
- This allows you to track changes and collaborate

## 🛠️ Installation Steps

### 1. Open Terminal/Command Prompt
- **Windows**: Press `Win + R`, type `cmd` or `powershell`, press Enter
- **Mac**: Open Terminal from Applications > Utilities
- **Linux**: Open your preferred terminal

### 2. Navigate to Project Directory
```bash
cd "C:\Users\micha\OneDrive\Desktop\My CV"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Alternative Setup Methods

### Using Yarn (if you prefer)
```bash
npm install -g yarn
yarn install
yarn dev
```

### Using pnpm (faster alternative)
```bash
npm install -g pnpm
pnpm install
pnpm dev
```

## 📱 What You'll Get

After successful setup, you'll have:

✅ **Modern Portfolio Website** with:
- Responsive design (mobile-first)
- Dark/Light mode toggle
- Smooth animations
- Professional UI components
- SEO optimization
- Contact form
- Project showcase
- Skills display

## 🎨 Customization

### Update Personal Information
- Edit `components/about.tsx` for your bio and skills
- Modify `components/projects.tsx` for your projects
- Update `components/contact.tsx` for contact details

### Change Images
- Replace images in `public/images/` directory
- Update image paths in components

### Modify Colors
- Edit `app/globals.css` for theme colors
- Update `tailwind.config.js` for custom design system

## 🚨 Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Restart terminal after installing Node.js
- Try running as administrator (Windows)

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Dependencies fail to install
```bash
npm cache clean --force
npm install
```

### Build errors
```bash
npm run build
```
Check the error messages for specific issues.

## 📞 Need Help?

If you encounter any issues:
1. Check that Node.js is properly installed
2. Ensure you're in the correct directory
3. Try deleting `node_modules` folder and running `npm install` again
4. Check the error messages for specific guidance

## 🎯 Next Steps

Once the portfolio is running:
1. Customize the content with your information
2. Add your own projects and images
3. Deploy to platforms like Vercel, Netlify, or GitHub Pages
4. Share your portfolio with potential clients or employers

---

**Happy coding! 🚀** 