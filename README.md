# Karl's Portfolio

A modern, responsive portfolio website built with React and Vite, featuring smooth AOS (Animate On Scroll) animations.

Live Demo: [https://smarty-portfolio.netlify.app/]

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **AOS Animations**: Beautiful scroll-triggered animations
- **Interactive Sections**: Home, Skills, Tech Stacks, and Contact sections
- **Contact Form**: Functional contact form for client inquiries

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with modern layouts (Grid, Flexbox)
- **Animations**: AOS (Animate On Scroll)
- **Build Tool**: Vite for fast development and optimized builds

## 📋 Sections

### 🏠 Home
- Hero section with introduction
- Call-to-action buttons
- Professional greeting with animated text

### 💪 Skills
- Categorized skill sets (Frontend, Backend, Database & Tools)
- Interactive progress bars
- Skill level indicators

### 🔧 Tech Stacks
- Technology cards with descriptions
- Organized by development areas
- Technology tags for each stack

### 📞 Contact
- Contact information display
- Functional contact form
- Social media links
- Professional contact details

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Home.jsx    # Hero/landing section
│   │   ├── Skills.jsx  # Skills showcase
│   │   ├── TechStacks.jsx # Technology stacks
│   │   └── Contact.jsx # Contact form & info
│   ├── App.jsx         # Main app component
│   ├── App.css         # Component styles
│   ├── index.css       # Global styles
│   └── main.jsx        # App entry point
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🎨 Customization

To personalize this portfolio for your own use:

1. **Update personal information** in the components:
   - Name, title, and description in `Home.jsx`
   - Skills and proficiency levels in `Skills.jsx`
   - Technology stacks in `TechStacks.jsx`
   - Contact information in `Contact.jsx`

2. **Replace placeholder content**:
   - Add your profile photo to replace the placeholder
   - Update contact details (email, phone, social links)
   - Customize the color scheme in CSS files

3. **Modify animations**:
   - Adjust AOS animation types and delays
   - Add new animations or modify existing ones

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

Built with ❤️ using React and Vite
