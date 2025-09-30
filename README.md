# Epikouros

<div align="center">
  <img src="./assets/logo-epikouros.png" alt="Epikouros Logo" width="200">
</div>

## About

Epikouros is a cutting-edge front-end development environment created by **Lucas Murta**. This project provides a rapid UI development platform powered by Artificial Intelligence, featuring the most current front-end architecture patterns and tools.

The project is designed to accelerate interface development through modern tooling, component-driven architecture, and AI-assisted development workflows.

## Features

- 🚀 **Rapid Development**: AI-powered development environment for fast UI creation
- 🎨 **Design System**: Comprehensive component library with Storybook documentation
- ⚡ **Modern Stack**: Built with React, TypeScript, and Nx monorepo architecture
- 🔧 **Developer Experience**: Hot reload, linting, testing, and formatting out of the box
- 📱 **Responsive**: Mobile-first design approach
- 🧪 **Testing**: Comprehensive testing setup with Jest
- 📚 **Documentation**: Interactive component documentation with Storybook

## Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/lucas-murta/epikouros.git
cd epikouros
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

#### Web Application

To start the development server:

```bash
npm run serve:web-view
```

or

```bash
npx nx serve web-view
```

The application will be available at `http://localhost:4200`

#### Storybook

To run the component library documentation:

```bash
npm run storybook
```

or

```bash
npx nx storybook ep-ds
```

Storybook will be available at `http://localhost:6006`

🔗 **[View Live Storybook Documentation](https://lucas-murta.github.io/epikouros-storybook)** _(Coming Soon)_

### Building for Production

#### Web Application

```bash
npm run build:web-view
```

or

```bash
npx nx build web-view
```

#### Storybook

```bash
npm run build-storybook
```

or

```bash
npx nx build-storybook ep-ds
```

## Project Structure

```
epikouros/
├── apps/
│   └── web-view/          # Main web application
├── libs/
│   └── ep-ds/             # Design system and component library
├── assets/                # Project assets (logos, images)
└── tools/                 # Build tools and configurations
```

## Available Scripts

- `npm run serve:web-view` - Start development server
- `npm run build:web-view` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run linting
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook for production

## Development Workflow

This project uses modern development practices:

- **Nx Monorepo**: Efficient workspace management
- **Component-Driven Development**: Build UIs in isolation
- **Automated Testing**: Jest for unit and integration tests
- **Code Quality**: ESLint and Prettier for consistent code style
- **Pre-commit Hooks**: Automated linting and testing before commits

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Ensure tests pass and code is properly formatted
4. Submit a pull request

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Monorepo**: Nx
- **Styling**: CSS-in-JS / Styled Components
- **Testing**: Jest + React Testing Library
- **Documentation**: Storybook
- **Code Quality**: ESLint + Prettier + Husky

## License

This project is created by Lucas Murta for educational and development purposes.

---

<div align="center">
  <p>Built with ❤️ by <strong>Lucas Murta</strong></p>
  <p>Powered by AI and modern front-end technologies</p>
</div>
