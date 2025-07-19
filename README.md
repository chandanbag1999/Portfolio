# Professional Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://portfolio-lucifer-morningstar-projects.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A modern, responsive portfolio website showcasing my expertise as a Backend-focused full-stack developer. Built with React, TypeScript, and Tailwind CSS, featuring a clean design with a dark theme, smooth animations, and comprehensive project showcases.

<div align="center">
  <img src="public/profile.png" alt="Portfolio Preview" width="600px" />
</div>

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations using Framer Motion
- **Dark/Light Mode**: Built-in theme support with next-themes
- **Interactive Elements**: 
  - Dynamic project cards with hover effects
  - Animated skill progress bars
  - Smooth scrolling navigation
  - Typewriter effect for role description
- **Project Showcases**: Detailed project presentations with live demos and source code links
- **Contact Section**: Easy-to-use contact form with social media links
- **Performance Optimized**: Fast loading times and smooth animations

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3
- **Type Safety**: TypeScript 5.5
- **Styling**: 
  - Tailwind CSS 3.4
  - CSS Animations
  - shadcn/ui Components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Other Libraries**:
  - React Router Dom
  - React Hook Form
  - Typewriter Effect
  - Zod (Form Validation)
  - Sonner (Toasts)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/chandanbag1999/Portfolio.git
   ```

2. Navigate to the project directory
   ```bash
   cd Portfolio
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # UI components
│   │   ├── layout/     # Layout components
│   │   └── sections/   # Page sections
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry point
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

1. **Colors**: Edit `tailwind.config.js` to modify the color scheme
2. **Typography**: Adjust font settings in `tailwind.config.js`
3. **Content**: Update personal information in respective components
4. **Projects**: Modify the projects array in `Projects.tsx`
5. **Skills**: Edit skill categories in `Skills.tsx`

## 📱 Responsive Design

The portfolio is responsive across various screen sizes:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## ⚡ Performance

- Optimized image loading
- Code splitting
- Efficient component rendering
- Minimized bundle size

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Chandan Bag**
- LinkedIn: [@cbag-98](https://www.linkedin.com/in/cbag-98/)
- GitHub: [@chandanbag1999](https://github.com/chandanbag1999)
- Email: cbag67612@gmail.com

## 🌐 Live Demo

Visit the live portfolio: [Portfolio Website](https://portfolio-lucifer-morningstar-projects.vercel.app/)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for icons
- [Framer Motion](https://www.framer.com/motion/) for animations
