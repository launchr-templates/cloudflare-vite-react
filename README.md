# Cloudflare + Vite + React + TypeScript

This is a modern web application template that combines the power of Cloudflare Workers with Vite's lightning-fast development experience. Built with TypeScript and React, it provides a robust foundation for building performant web applications.

## Tech Stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React 19](https://react.dev/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless execution environment
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Development Tools

- [ESLint](https://eslint.org/) - For code linting
- [Prettier](https://prettier.io/) - For code formatting
- [Husky](https://typicode.github.io/husky/) - For Git hooks
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) - CLI tool for Cloudflare Workers

## Getting Started

1. Clone this repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

This project is configured to deploy to Cloudflare Workers. Make sure you have your Cloudflare account set up and wrangler configured before deploying.
