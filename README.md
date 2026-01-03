# 🪟 PLC Library

<div align="center">

**PLC Library - React component library with glassmorphism styling**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 🎯 Overview

**PLC Library** is a monorepo containing the **PLC** React component library and related projects. The PLC library provides a comprehensive set of UI components with glassmorphism styling inspired by Apple's Liquid Glass design language.

### 📦 Package Contents

- **@plcl-core/** - Core React component library with 45+ components
- **@plcl-core-types/** - Type definitions for core components
- **@plcl-ui/** - Desktop UI library with Shell component
- **@plcl-ui-types/** - Type definitions for desktop UI
- **docs/** - Documentation website
- **playground/** - Component playground for testing

---

## 🚀 Installation

```bash
npm install @plcl/core @plcl/ui
```

---

## 📖 Usage

### Core Components Only

```tsx
import { Button, Card, Input, ThemeProvider } from '@plcl/core';
import '@plcl/core/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Input placeholder="Enter text..." />
        <Button>Submit</Button>
      </Card>
    </ThemeProvider>
  );
}
```

### Desktop Environment

```tsx
import { Shell } from '@plcl/ui';
import '@plcl/core/styles.css';

function App() {
  return <Shell variant="desktop" />;
}
```

### Shell Variants

```tsx
// Desktop environment with windows, dock, wallpaper
<Shell variant="desktop" customApps={myApps} />

// Standard app layout
<Shell variant="app" header={<Logo />} footer={<Copyright />}>
  <MainContent />
</Shell>

// Page layout
<Shell variant="page" headerContent={<NavBar />}>
  <PageContent />
</Shell>

// Sidebar layout
<Shell variant="sidebar" sidebar={<Navigation />}>
  <Content />
</Shell>

// Iframe wrapper
<Shell variant="web" url="https://example.com" />

// Individual window
<Shell 
  variant="window" 
  windowTitle="My Window"
  windowHandleClose={() => {}}
  windowIsOpen={true}
>
  <WindowContent />
</Shell>
```

### Custom Desktop Apps

```tsx
import { Shell } from '@plcl/ui';
import type { AppDefinition } from '@plcl/ui-types';
import { IconCalculator } from '@tabler/icons-react';

const CalculatorApp = ({ isOpen, handleClose, zIndex, onFocus }) => (
  // Your app component using Window
);

const customApps: AppDefinition[] = [
  {
    id: 'calculator',
    title: 'Calculator',
    icon: <IconCalculator size={32} />,
    Component: CalculatorApp,
  },
];

<Shell variant="desktop" customApps={customApps} />
```

---

## 🏗️ Project Structure

```
plcl/
├── @plcl-core/          # Core component library (45+ components)
├── @plcl-core-types/    # Type definitions for core
├── @plcl-ui/            # Desktop UI library (Shell component)
├── @plcl-ui-types/      # Type definitions for UI
├── docs/                # Documentation website
├── playground/          # Component playground
└── README.md
```

---

## 🛠️ Development

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Getting Started

```bash
# Clone the repository
git clone https://github.com/marius-patrik/plcl.git
cd plcl

# Install dependencies
npm install

# Build all packages
npm run build

# Start development mode
npm run dev
```

### Build Order

```bash
# Types first
npm run build:types    # @plcl-core-types

# Then libraries
npm run build:lib      # @plcl-core

# UI types and library
cd @plcl-ui-types && npm run build
cd @plcl-ui && npm run build
```

---

## 📝 Available Scripts

### Root Scripts

- `npm run dev` - Start development servers
- `npm run build` - Build all packages
- `npm run lint` - Lint all packages
- `npm run format` - Format code

### Package Scripts

Each package has:
- `npm run build` - Build the package
- `npm run dev` - Watch mode
- `npm run lint` - Lint code
- `npm run format` - Format code

---

## 🔗 Package Exports

### @plcl/core

- **Components**: Button, Card, Input, Select, Checkbox, Switch, Modal, Drawer, etc.
- **Layout**: Header, Footer, Sidebar, Main, Container, Grid, Flex, Stack
- **Theme**: ThemeProvider, useTheme, ThemeContext

### @plcl/ui

- **Shell** - Main component with variants: desktop, app, page, sidebar, web, window
- **IFrameApp** - Utility for embedding web apps

### @plcl/ui-types

- **AppDefinition** - Interface for custom apps
- **AppWindowProps** - Props for app window components
- **WindowProps** - Window component props

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**Built with ❤️ for beautiful UIs**

</div>
