# Personal Website

A simple and elegant personal website built with React, featuring dark and light theme support.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

### Install Dependencies

Navigate to the project directory and install dependencies:

```bash
cd rudreshtrivedi
npm install
```

Or if you prefer yarn:

```bash
cd rudreshtrivedi
yarn install
```

## Running Locally

To start the development server:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The website will open at [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This creates a `build` folder with static files ready for deployment. The build folder contains all the files needed to deploy to a static hosting service like AWS S3.

## Deployment to S3

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `build` folder to your S3 bucket.

3. Configure your S3 bucket for static website hosting.

## Features

- Dark and light theme toggle
- Responsive design
- Simple and elegant UI
- All styling consolidated in `theme.css`
- Theme preference persistence

## Project Structure

```
rudreshtrivedi/
├── src/
│   ├── components/      # React components
│   ├── contexts/        # Theme context
│   ├── assets/          # Images and assets
│   ├── theme.css        # All styling in one place
│   └── App.js           # Main app component
├── public/              # Static files
└── build/               # Production build (generated)
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)
