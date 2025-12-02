# My Experience Portfolio

A modern, responsive portfolio website showcasing professional experience, skills, and projects. Built with Next.js 16 and styled with Tailwind CSS v4.

## Features

- **Dark/Light Theme Toggle** - Seamless theme switching with custom animations
- **Responsive Design** - Mobile-first approach that works on all devices
- **Interactive UI** - Enhanced button animations and hover effects
- **Professional Summary** - Dedicated page for recruiters
- **Experience Timeline** - Chronological display of work history
- **Project Showcase** - Highlighting key projects and achievements
- **Skills Overview** - Comprehensive list of technical and professional skills

## Tech Stack

- **Framework**: Next.js 16.0.3 (with Turbopack)
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode support
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nhatmobile1/my-experience.git
cd my-experience
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
my-experience/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.jsx           # Root layout with theme provider
│   ├── page.jsx             # Home page with experience content
│   └── summary/
│       └── page.jsx         # Recruiter summary page
├── components/
│   └── ui/                  # Reusable UI components
├── public/                  # Static assets
└── next.config.mjs          # Next.js configuration
```

## Custom Features

### Button Animations

The project includes custom button animations:

- **Theme/Summary Buttons**: 44x44px icon buttons with scale hover effect
- **Social Buttons (GitHub/LinkedIn)**: Animated left border that flows from center
- **Primary Button (Email)**: Pulse effect with subtle glow on hover
- **Dark Mode Support**: All buttons adapt to the current theme

### Color Palette

- **Primary/Terracotta**: `#c45c48`
- **Neutral Light**: `#fdfcfb` (background)
- **Neutral Border**: `#e4dfd8`
- **Dark Mode**: Custom neutral palette for dark backgrounds

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Deployment

This project is configured for deployment on Vercel with automatic deployments from the main branch.

The `assetPrefix` is environment-aware:
- **Development**: Assets load from localhost
- **Production**: Assets load from Vercel CDN

## License

This project is personal portfolio property of Nhat Tran.

## Contact

- Email: nhatmobile@gmail.com
- LinkedIn: [linkedin.com/in/nt-tran](https://www.linkedin.com/in/nt-tran/)
- GitHub: [github.com/nhatmobile1](https://github.com/nhatmobile1)
