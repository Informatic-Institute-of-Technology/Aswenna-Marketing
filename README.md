# Aswenna (අස්වැන්න) 🌾

Aswenna is a smart agricultural platform designed to empower Sri Lanka's farming community. It creates a digital bridge between farmers, landowners, and sponsors, promoting sustainable agriculture, financial transparency, and efficient resource management.

## 🌟 Features

### Core Functionality
- **Tri-Party System**: Connects Farmers, Landowners, and Sponsors
- **Multilingual Support**: Sinhala (සිංහල), Tamil (தமிழ்), and English
- **Role-Based Dashboards**: Customized interfaces for each user type
- **E-Link Network**: Visual representation of connections between parties
- **Project Management**: Create, browse, and fund agricultural projects
- **PWA Support**: Installable as a mobile app with offline capabilities

### User Roles

#### Farmer Portal (ගොවි උපකරණ පුවරුව)
- Crop management and tracking
- Land association management
- Access to sponsor offers
- Upload photos and documents

#### Landowner Dashboard (ඉඩම් හිමි උපකරණ පුවරුව)
- Manage multiple plots
- Approve/reject farmer requests
- Land utilization analytics
- Track active associations

#### Sponsor Hub (අනුග්‍රාහක මධ්‍යස්ථානය)
- Browse verified projects
- Create and manage pledges
- Impact tracking
- Financial transparency

## 🛠️ Tech Stack

### Frontend
- **React 19+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling

### State Management & Data
- **Zustand** - Lightweight state management
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Routing & Internationalization
- **React Router v6** - Client-side routing
- **react-i18next** - Multilingual support

### UI Components & Icons
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **Testing Library** - Component testing

### PWA & Performance
- **vite-plugin-pwa** - Progressive Web App support

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/Informatic-Institute-of-Technology/Aswenna.git
cd Aswenna

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Testing
npm test            # Run tests in watch mode
npm run test:ci     # Run tests once (for CI)
```

## 📁 Project Structure

```
/src
  /api              # API client configurations
  /assets           # Images, videos, and static assets
  /components       # Reusable UI components
    /common         # Shared components (Button, Input, Card)
    /layout         # Layout components (Header, Sidebar)
  /features         # Feature-based modules
    /auth           # Authentication pages and logic
    /farmer         # Farmer-specific features
    /landowner      # Landowner-specific features
    /sponsor        # Sponsor-specific features
  /hooks            # Custom React hooks
  /i18n             # Internationalization
    /locales        # Translation files (en, si, ta)
  /pages            # Top-level pages
  /routes           # Routing configuration
  /stores           # Zustand state stores
  /test             # Test utilities and setup
  /utils            # Helper functions
```

## 🌍 Internationalization

The application supports three languages:
- **Sinhala (සිංහල)** - Primary language
- **Tamil (தமிழ்)** - Secondary language
- **English** - International language

Language can be switched using the globe icon in the header.

## 🎨 Design System

### Colors
- **Primary Green**: `#2E8B57` - Brand color
- **Background**: White (`#FFFFFF`)
- **Text**: Gray scale for hierarchy

### Typography
- **Font Family**: Inter, Noto Sans Sinhala, Noto Sans Tamil

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔐 Authentication

JWT-based authentication with role-based access control for Farmers, Landowners, and Sponsors.

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:ci -- --coverage
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output will be in the `/dist` directory.

### Deployment Options
- **Netlify** - Recommended
- **Vercel** - Excellent React support
- **Firebase Hosting**
- **AWS S3 + CloudFront**

## 📱 PWA Features

- **Installability**: Can be installed on mobile and desktop
- **Offline Support**: Cached pages work without internet
- **Background Sync**: Updates when connection is restored

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License

## 🗺️ Roadmap

### MVP (Current Phase)
- ✅ Core authentication system
- ✅ Role-based dashboards
- ✅ Multilingual support
- ✅ Responsive design
- ✅ PWA capabilities

### Phase 2 (Planned)
- [ ] E-Link network visualization
- [ ] Real-time notifications
- [ ] Project creation and management
- [ ] Payment integration
- [ ] Advanced analytics

---

**Made with ❤️ for Sri Lanka's farming community**
