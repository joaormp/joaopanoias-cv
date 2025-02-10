# NextJS Portfolio Website

## 🌟 Project Overview
A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features a clean, professional design with dark/light mode support and dynamic content rendering.

## 🛠 Tech Stack

### Core Technologies
- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Qodana** - Code quality monitoring

## ✨ Features

- 📱 Fully responsive design
- 🌓 Dark/Light mode toggle
- 📊 Dynamic skill visualization
- 🔄 Server-side rendering
- 📈 Optimized performance
- 🎨 Modern UI/UX design

## 🏗 Project Structure

```
joaopanoias-cv/
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/         # Reusable React components
│   ├── ui/            # UI components
│   └── sections/      # Page sections
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joaormp/joaopanoias-cv.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `postcss.config.mjs` - PostCSS plugins
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

The project uses several tools to maintain code quality:
- ESLint for code linting
- TypeScript for type checking
- Qodana for continuous code quality monitoring

## 🔍 Key Components

- `Layout.tsx` - Main layout wrapper with theme provider
- `Navbar.tsx` - Responsive navigation bar
- `ThemeToggle.tsx` - Dark/Light mode switcher
- `SkillsGrid.tsx` - Dynamic skills visualization
- `ExperienceTimeline.tsx` - Interactive experience display

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**João Panoias**
- GitHub: [@joaormp](https://github.com/joaormp)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting capabilities