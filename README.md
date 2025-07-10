# 🛍️ Phitter Shop

A modern e-commerce React application built with Vite, featuring a responsive design with Tailwind CSS and smooth animations.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and responsive design with Tailwind CSS
- 📱 **Mobile-First** - Fully responsive across all devices
- 🎭 **Smooth Animations** - Beautiful scroll animations with AOS library
- 🛒 **Product Catalog** - Browse accessories, smart watches, and more
- 🔍 **Category Filtering** - Easy navigation through product categories
- 💳 **Shopping Cart** - Add items to cart with intuitive interface
- 🌟 **Interactive Elements** - Hover effects and smooth transitions
- 🎯 **SEO Optimized** - Built with modern React practices

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.3
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: AOS (Animate On Scroll) 2.3.4
- **State Management**: Redux Toolkit 2.8.2
- **Routing**: React Router DOM 7.6.3
- **HTTP Client**: Axios 1.10.0
- **Icons**: Lucide React 0.525.0
- **Linting**: ESLint 9.30.1

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/phitter-shop.git
   cd phitter-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
phitter-shop/
├── public/
│   └── vite.svg
├── src/
│   ├── admin/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── router/
│   │   ├── services/
│   │   └── stores/
│   ├── assets/
│   │   └── react.svg
│   ├── front/
│   │   ├── components/
│   │   │   ├── Accessories.jsx
│   │   │   ├── HomeBrand.jsx
│   │   │   ├── HomeSlide.jsx
│   │   │   ├── NewArrival.jsx
│   │   │   ├── PopularCategory.jsx
│   │   │   ├── SmartWatch.jsx
│   │   │   └── SpecialOffer.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Master.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   └── router/
│   │       └── index.js
│   ├── router/
│   │   └── index.js
│   ├── services/
│   │   └── index.js
│   ├── stores/
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── Master.jsx
├── db.json
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── eslint.config.js
```

## 🎨 Components

### Frontend Components
- **Accessories** - Product showcase with hover effects
- **HomeBrand** - Brand showcase section
- **HomeSlide** - Hero slider component
- **NewArrival** - Latest products display
- **PopularCategory** - Category navigation
- **SmartWatch** - Smart watch product grid
- **SpecialOffer** - Promotional offers section

### Layout Components
- **Navbar** - Navigation header
- **Footer** - Site footer
- **Master** - Main layout wrapper

## 🎯 Features in Detail

### Product Display
- Responsive grid layout (1-6 columns based on screen size)
- Product cards with hover animations
- Price display with monthly payment options
- "NEW" badges for new products
- Warranty information display
- Add to cart functionality

### Animations
- Smooth scroll animations using AOS
- Hover effects on product cards
- Smooth transitions and transforms
- Staggered animation delays for grid items

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid system
- Optimized images and layouts

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Vite Configuration
Build settings and plugins are configured in `vite.config.js`.

### ESLint
Code linting rules are defined in `eslint.config.js`.

## 🌐 API Integration

The project includes service files for API integration:
- `src/services/index.js` - API service configuration
- Axios for HTTP requests
- Redux Toolkit for state management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [AOS](https://michalsnik.github.io/aos/)
- Icons by [Lucide React](https://lucide.dev/)

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

Made with ❤️ by [Your Name]+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
