# Vincent Aurellio Budianto | Portfolio

A personal portfolio website for showcasing machine learning, AI, and quantitative/data science work. The site is built with React, TypeScript, Vite, and Tailwind CSS, and is designed as a clean single-page experience with a home view, project highlights, and an about section.

## Overview

This portfolio presents:

- a professional overview of my background in data science and analytics
- featured projects across reinforcement learning, AI systems, and applied ML
- a simple, readable interface for browsing technical work and project details
- a lightweight static site structure suitable for hosting on GitHub Pages or similar hosting providers

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- ESLint + Prettier

## Project Structure

```text
.
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   └── sections/
│   ├── data/
│   ├── pages/
│   ├── router/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── LICENSE
├── README.md
└── .gitignore
```

## Featured Work

The portfolio highlights projects such as:

- Adversarial Reinforcement Learning GridWorld
- AI Chat Survey Platform
- Malware Classification
- Word Embeddings with LSTM
- Denoising Diffusion Probabilistic Model
- Pokémon Card Recognition System

Project content is defined in `src/data/projects.ts` and is rendered through the routing/pages structure.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, typically:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start the Vite dev server
npm run build    # run TypeScript build and production bundle
npm run lint     # check for ESLint issues
npm run format   # auto-format the project with Prettier
npm run preview  # preview the production build locally
```

## Notes

- The site reflects a portfolio and personal website for data science and AI work.
- The website is still a work in progress, which may evolve as more content is added.
- For project or resume updates, the main content sources are under `src/pages`, `src/components`, and `src/data`.

