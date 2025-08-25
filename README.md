# Michael Haven - Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases Michael Haven's skills as a web developer with a clean, professional design inspired by modern tech companies like Apple, Stripe, and Vercel.

## ✨ Features

- **Modern Design**: Clean, minimal UI with smooth animations and gradients
- **Fully Responsive**: Mobile-first design that scales beautifully to all devices
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Smooth Animations**: Framer Motion powered animations for section reveals and interactions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Next.js optimization with image optimization and code splitting

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Theme**: next-themes for dark/light mode

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   └── button.tsx       # Button component with variants
│   ├── navbar.tsx           # Navigation component
│   ├── hero.tsx             # Hero section
│   ├── about.tsx            # About section with skills
│   ├── projects.tsx         # Projects showcase
│   ├── contact.tsx          # Contact form and info
│   ├── footer.tsx           # Footer component
│   ├── theme-toggle.tsx     # Theme switcher
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Static images
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd michael-haven-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors and Themes

The portfolio uses CSS custom properties for theming. You can customize colors in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

### Content Updates

- **Personal Information**: Update content in the respective component files
- **Projects**: Modify the `projects` array in `components/projects.tsx`
- **Skills**: Update the `skills` array in `components/about.tsx`
- **Contact Info**: Update contact details in `components/contact.tsx`

### Images

Place your images in the `public/images/` directory and update the image paths in the components.

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly interactions
- Optimized typography scales
- Flexible spacing systems

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- High contrast ratios
- Screen reader compatibility

## 🚀 Performance Optimizations

- Next.js Image optimization
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Efficient CSS with Tailwind
- Minimal JavaScript bundle

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

The project uses:
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: michaelnhyira77@gmail.com
- **Phone**: +233 54 744 1320
- **LinkedIn**: [Michael Nhyira](https://linkedin.com/in/michael-nhyira-a38287274/)
- **Instagram**: [@haven_highest](https://www.instagram.com/haven_highest/)

---

Built with ❤️ by Michael Haven using modern web technologies. 