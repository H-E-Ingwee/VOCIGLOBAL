# VOCI Global - Modern Web Application

A modern, professional web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** for VOCI Global's leadership development programs.

## 🚀 Features

- **Modern Design System**: Built with Tailwind CSS with VOCI brand colors
- **Component-Based Architecture**: Reusable React components for consistency
- **Smooth Animations**: Framer Motion for engaging interactions
- **Responsive Design**: Mobile-first approach for all devices
- **Type-Safe**: Full TypeScript support
- **SEO Optimized**: Next.js metadata and structured data
- **Performance**: Image optimization and code splitting

## 📂 Project Structure

```
VOCIGLOBAL/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── programs/          # Programs page
│   ├── events/            # Events page
│   ├── team/              # Team page
│   ├── join/              # Join/Application page
│   └── contact/           # Contact page
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── EventCard.tsx
│   │   ├── TeamCard.tsx
│   │   ├── CtaBanner.tsx
│   │   └── SectionTitle.tsx
│   ├── lib/
│   │   ├── data.ts        # Static content data
│   │   └── utils.ts       # Utility functions
│   └── styles/
│       └── globals.css    # Global styles & Tailwind
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: VOCI Dark Blue (#14213d)
- **Accent**: VOCI Blue (#007bff)
- **Highlight**: VOCI Gold (#C28B00)
- **Alert**: VOCI Red (#B00000)
- **Background**: Light Blue (#e6f2ff), White

### Typography
- **Headings**: Montserrat (bold, 700-800 weight)
- **Body**: Open Sans (regular, 400-600 weight)

### Components
- **Cards**: Rounded corners, subtle shadows, hover lift effects
- **Buttons**: Gradient backgrounds, smooth transitions, uppercase text
- **Icons**: Gradient backgrounds, circular badges with hover effects
- **Sections**: Alternating white and light-blue backgrounds

## 🔧 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the app running.

## 📦 Dependencies

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 🎯 Pages

- **Home**: Hero, features, programs overview, events, CTA
- **About**: Mission, vision, values, leadership team
- **Programs**: Detailed program cards with modules
- **Events**: Upcoming events and registration
- **Team**: Leadership team profiles
- **Join**: Application form and membership benefits
- **Contact**: Contact information and inquiry form

## 📱 Responsive Design

All pages are fully responsive and optimized for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## ✨ Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Event registration system
- [ ] Blog/News section
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Admin panel

## 📄 License

© 2026 VOCI Global. All rights reserved.

## 👥 Contributing

For questions or contributions, please contact hello@voci.global
