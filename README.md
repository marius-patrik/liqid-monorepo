# 🪟 PLC Library

<div align="center">

**PLC Library - Bundle package containing PLC component library**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 🎯 Overview

**PLC Library** is a monorepo containing the **PLC** React component library and related projects. The PLC library provides a comprehensive set of UI components with glassmorphism styling inspired by Apple's Liquid Glass design language.

### 📦 Package Contents

- **plc-core/** - Core React component library with glassmorphism styling (published to npm)
- **plc-core-types/** - Type definitions package for plc-core
- **plc-ui/** - Desktop UI library for window management and shells
- **plc-ui-types/** - Type definitions package for plc-ui
- **plc-docs/** - Documentation website showcasing all components with interactive examples
- **plc-playground/** - Component playground for testing and development

---

## 🚀 Installation

```bash
npm install plc-core plc-ui
```

---

## 📖 Usage

### Basic Import

```tsx
import { Button, Card, Shell } from 'plc-core';
import { Desktop, Window, WindowManager } from 'plc-ui';
import 'plc-core/styles.css';
```

### Component Library Only

```tsx
import { Button, Card, Input } from 'plc-core';
```

### Desktop UI Components

```tsx
import { Desktop, Window } from 'plc-ui';
```

### Styles

Don't forget to import the CSS:

```tsx
import 'plc-core/styles.css';
```

---

## 🏗️ Project Structure

```
plc/
├── plc-core/           # Core component library
├── plc-core-types/     # Type definitions for plc-core
├── plc-ui/             # Desktop UI library
├── plc-ui-types/       # Type definitions for plc-ui
├── plc-docs/           # Documentation website
├── plc-playground/     # Component playground
├── agent/              # Agent rules and configuration
└── README.md           # This file
```

---

## 🛠️ Development

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git** (for submodule support)

### Getting Started

```bash
# Clone the repository with submodules
git clone --recursive https://github.com/marius-patrik/plc.git
cd plc

# Or if already cloned, initialize submodules
git submodule update --init --recursive

# Install dependencies for each package
cd plc-core-types && npm install && cd ..
cd plc-core && npm install && cd ..
cd plc-ui-types && npm install && cd ..
cd plc-ui && npm install && cd ..
cd plc-docs && npm install && cd ..
cd plc-playground && npm install && cd ..

# Or use the convenience script from the root
npm run install:all
```

### Working with Git Submodules

The packages are maintained as git submodules:

```bash
# Initialize submodules after cloning
git submodule update --init --recursive

# Update submodules to latest commits
git submodule update --remote

# Update a specific submodule
git submodule update --remote plc-core
git submodule update --remote plc-core-types
```

## 📝 Available Scripts

This is a monorepo containing multiple packages. Each package has its own scripts:

### Root Scripts

From the root directory, you can run commands for all packages:

- `npm run dev` - Start development servers for all packages
- `npm run build` - Build all packages
- `npm run format` - Format code in all packages
- `npm run lint` - Lint all packages
- `npm run install:all` - Install dependencies for all packages

### plc-core-types

- `npm run build` - Build type declarations
- `npm run dev` - Watch mode for development
- `npm run format` - Format code with Biome
- `npm run lint` - Lint and fix code with Biome
- `npm run lint:check` - Check linting without fixing

### plc-core

- `npm run build` - Build the component library
- `npm run dev` - Watch mode for development
- `npm run format` - Format code with Biome
- `npm run lint` - Lint and fix code with Biome
- `npm run lint:check` - Check linting without fixing

### plc-ui-types

- `npm run build` - Build type declarations
- `npm run dev` - Watch mode for development
- `npm run format` - Format code with Biome
- `npm run lint` - Lint and fix code with Biome

### plc-ui

- `npm run build` - Build the desktop UI library
- `npm run dev` - Watch mode for development
- `npm run format` - Format code with Biome
- `npm run lint` - Lint and fix code with Biome
- `npm run lint:check` - Check linting without fixing

### plc-docs

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Biome
- `npm run lint` - Lint and fix code with Biome
- `npm run lint:check` - Check linting without fixing

### plc-playground

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Biome
- `npm run lint` - Lint and fix code with Biome
- `npm run lint:check` - Check linting without fixing

---

## 🔗 Related Packages

- **[plc-core](./plc-core/)** - Core component library with glassmorphism styling
- **[plc-core-types](./plc-core-types/)** - TypeScript type definitions for plc-core
- **[plc-ui](./plc-ui/)** - Desktop UI library for window management
- **[plc-ui-types](./plc-ui-types/)** - TypeScript type definitions for plc-ui
- **[plc-docs](./plc-docs/)** - Documentation website with interactive component examples
- **[plc-playground](./plc-playground/)** - Component playground for testing

## 🏗️ Architecture

This monorepo follows a clear structure:

- **plc-core/** - The core library package that gets published to npm. Contains all React components, hooks, types, and styles.
- **plc-core-types/** - Standalone TypeScript types package. Contains shared type definitions (styling, components, layout, navigation types).
- **plc-ui/** - Desktop UI library for window management and desktop shells. Depends on plc-core.
- **plc-ui-types/** - TypeScript types package for plc-ui. Contains desktop and window type definitions.
- **plc-docs/** - Documentation site that imports and showcases PLC components.
- **plc-playground/** - Development playground for testing components.

All packages in this monorepo must use the PLC library components exclusively - no vanilla HTML/React components should be used.

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**Built with ❤️ for beautiful UIs**

</div>
