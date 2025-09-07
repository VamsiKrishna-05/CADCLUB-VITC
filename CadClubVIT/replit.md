# CAD Club VIT Chennai Website

## Overview

This is a modern web application for the CAD Club at VIT Chennai, designed to showcase the club's activities, team members, gallery, and provide contact functionality. The application serves as the digital presence for the engineering club, featuring an elegant design with animations and responsive layouts to attract students and showcase the club's technical excellence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built as a React Single Page Application (SPA) using modern React patterns:
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

The application follows a component-based architecture with reusable UI components and page-specific sections. The design system uses a consistent color scheme and typography with custom CSS variables for easy theming.

### Backend Architecture
The backend is a lightweight Express.js server with minimal API endpoints:
- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for contact form submission and health checks
- **Development**: Vite integration for seamless full-stack development

The server is designed to be simple and extensible, with a storage interface that can be easily swapped for database implementations.

### Database Schema
Currently uses in-memory storage with a defined user schema:
- **ORM**: Drizzle ORM configured for PostgreSQL (ready for database integration)
- **Schema**: User table with id, username, and password fields
- **Validation**: Zod schemas for type-safe data validation
- **Migration**: Drizzle Kit for database migrations (configured but not yet implemented)

The database configuration is prepared for PostgreSQL with Neon Database integration, though currently using in-memory storage for development.

### Development Workflow
- **TypeScript**: Full TypeScript support across client, server, and shared code
- **Module System**: ES modules with proper path aliases and shared types
- **Development Server**: Vite dev server with HMR and Express backend integration
- **Build Process**: Separate client and server builds with esbuild for server bundling

## External Dependencies

### Database & ORM
- **Drizzle ORM**: PostgreSQL ORM with type-safe queries
- **@neondatabase/serverless**: Neon Database serverless driver for PostgreSQL
- **Drizzle Kit**: Database migrations and schema management

### UI & Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Framer Motion**: Animation library for React components
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire application
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight routing library for React

### Fonts & Assets
- **Google Fonts**: Inter font family for modern typography
- **Font Awesome**: Icon library for additional icons
- **Unsplash**: External image hosting for gallery and member photos

The application is configured for deployment with environment-based configuration and includes development-specific tools like Replit integration for cloud development environments.