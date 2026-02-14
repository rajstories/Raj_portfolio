# Raj Portfolio

## Overview
A personal portfolio website for Raj, a Full-Stack Developer & AI/ML Enthusiast. Built with React, TypeScript, and Vite, styled with Tailwind CSS (CDN).

## Project Architecture
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Lucide React
- **PDF**: jspdf

### File Structure
- `index.html` - Entry HTML file
- `index.tsx` - React entry point
- `App.tsx` - Main App component
- `components/` - React components (Hero, Navbar, Features, Experience, Projects, ContentCreation)
- `types.ts` - TypeScript type definitions
- `vite.config.ts` - Vite configuration

## Development
- Dev server runs on port 5000 via `npm run dev`
- Build with `npm run build` (outputs to `dist/`)
- Deployment configured as static site serving `dist/`

## Environment Variables
- `GEMINI_API_KEY` - Optional, used for AI features if present
