# Aswenna Frontend Architecture

## Overview

The Aswenna frontend is a modern React application built with TypeScript, following best practices for scalability, maintainability, and performance.

## Technology Stack

### Core
- **React 19+**: Component-based UI library
- **TypeScript**: Static type checking
- **Vite**: Fast build tool and dev server

### State Management
- **Zustand**: Lightweight state management for auth and UI state
- **TanStack Query**: Server state management and data fetching

### Routing
- **React Router v6**: Client-side routing with nested routes

### Styling
- **Tailwind CSS v4**: Utility-first CSS framework
- **CSS Variables**: Theme customization

### Internationalization
- **react-i18next**: Translation management
- **i18next**: Core internationalization framework

### Forms & Validation
- **React Hook Form**: Performant form library
- **Zod**: Schema validation

### Testing
- **Vitest**: Unit testing framework
- **Testing Library**: Component testing utilities

## Project Structure

```
src/
├── api/                    # API client and services
├── assets/                 # Static assets (images, videos)
├── components/             # Reusable UI components
│   ├── common/            # Generic components (Button, Input, Card)
│   └── layout/            # Layout components (Header, Sidebar)
├── features/              # Feature-based modules
│   ├── auth/             # Authentication
│   ├── farmer/           # Farmer features
│   ├── landowner/        # Landowner features
│   └── sponsor/          # Sponsor features
├── hooks/                 # Custom React hooks
├── i18n/                  # Internationalization
│   ├── config.ts         # i18n configuration
│   └── locales/          # Translation files
├── pages/                 # Top-level pages
├── routes/                # Routing configuration
├── stores/                # Zustand stores
├── test/                  # Test setup and utilities
└── utils/                 # Helper functions
```

## Key Architectural Decisions

### 1. Feature-Based Organization

Features are organized by domain (auth, farmer, landowner, sponsor) rather than by type (components, hooks). This makes the codebase more maintainable as features grow.

### 2. Separation of Concerns

- **Components**: Pure presentation logic
- **Stores**: Application state
- **Services**: Business logic and API calls
- **Hooks**: Reusable stateful logic

### 3. Type Safety

TypeScript is used throughout for type safety. All components, functions, and API responses are typed.

### 4. Accessibility First

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG AA)

### 5. Internationalization

All user-facing text is internationalized, supporting Sinhala, Tamil, and English.

### 6. Progressive Web App

The application is a PWA with:
- Service worker for caching
- Offline support
- Install prompt
- App manifest

## State Management

### Auth State (Zustand + Persist)

```typescript
{
  user: User | null,
  token: string | null,
  isAuthenticated: boolean,
  login: (user, token) => void,
  logout: () => void
}
```

### UI State (Zustand)

```typescript
{
  sidebarOpen: boolean,
  theme: 'light' | 'dark',
  introVideoPlayed: boolean,
  toggleSidebar: () => void
}
```

### Server State (TanStack Query)

Used for API data fetching with automatic caching, refetching, and error handling.

## Component Design

### Atomic Design Principles

1. **Atoms**: Basic building blocks (Button, Input)
2. **Molecules**: Simple combinations (Form fields with labels)
3. **Organisms**: Complex components (Header, Sidebar)
4. **Templates**: Page layouts (MainLayout)
5. **Pages**: Complete pages (Dashboard, Login)

## Security Considerations

1. **Authentication**: JWT tokens stored securely
2. **XSS Prevention**: React's built-in escaping
3. **CSRF Protection**: Token-based authentication
4. **Input Validation**: Zod schemas validate all inputs
5. **Secure Communication**: HTTPS for all API calls

## Future Enhancements

1. **Storybook**: Component documentation and design system
2. **E2E Tests**: Playwright or Cypress
3. **Analytics**: User behavior tracking
4. **Error Monitoring**: Sentry integration
5. **Performance Monitoring**: Web Vitals tracking
6. **Advanced PWA**: Push notifications, background sync
