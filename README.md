# Personal Portfolio Website

[![Live](https://img.shields.io/badge/live-portfolio--vongoccuong.vercel.app-000?logo=vercel)](https://portfolio-vongoccuong.vercel.app/)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8)

A modern, high-performance, and responsive personal portfolio website showcasing my projects, skills, and professional experience. 

## 🚀 Features

- **Responsive Design**: Flawlessly adapts to desktop and mobile displays.
- **Interactive UI**: Engaging user interfaces for sections: Home, About, Experience, Services, Skill, and Contact.
- **Dark/Light Mode**: Smooth thematic toggling functionality.
- **SEO Optimized**: Dynamic metadata and title management built exactly for search engine indexing.
- **Ultra-Fast Performance**: Lightning-fast hot-reloading and highly optimized production builds via `Vite`.

## 🛠️ Tech Stack & Tooling

- **Framework**: [React.js 18](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS
- **SEO**: `react-helmet-async`
- **Slider/Carousel**: `swiper`

## 🏗️ Project Structure

```text
/
├── public/            # Static assets
├── src/
│   ├── components/    # React functional components (Feature-based structure)
│   ├── assets/        # Visual content (images, vector graphics, etc.)
│   ├── data/          # JSON data sources driving the portfolio content dynamically
│   ├── App.jsx        # Root Component orchestrating layouts, themes, and SEO Context
│   └── index.jsx      # Application entry point
├── index.html         # Main HTML Document
└── vite.config.js     # Toolchain compiler configuration
```

## 🚦 Getting Started

1. **Clone the repository**
```bash
git clone [your-repo-link]
cd portfolio-vnc
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server** (Lightning-fast HMR enabled)
```bash
npm run dev
# or
npm start
```

4. **Build for production**
```bash
npm run build
```

## 🚀 Deployment

This project generates a highly optimized static bundle (`dist/` directory) and is perfectly suited for zero-cost static hosting services:
- **GitHub Pages** (Ready to use: run `npm run deploy`)
- **Vercel**
- **Netlify**
- **AWS S3 / Cloudflare Pages**

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 📞 Contact

[Cuong Vo Ngoc]
Project Link: [Your GitHub URL]