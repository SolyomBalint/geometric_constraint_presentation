# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Slidev presentation repository for creating and managing slides for presentations. Slidev is a markdown-based presentation tool for developers that runs on Node.js.

## Development Environment

The project uses:
- **devenv**: Nix-based development environment manager (devenv.nix, devenv.yaml)
- **Node.js/npm**: JavaScript runtime with npm package management (configured in devenv.nix)
- Automatic npm install on environment entry

## Common Commands

### Development
```bash
# Start development server (default: slides.md)
npx slidev

# Start with specific file
npx slidev path/to/slides.md

# Start on custom port
npx slidev -p 3030

# Open in browser automatically
npx slidev -o
```

### Building & Export
```bash
# Build static SPA for hosting
npx slidev build

# Export slides to PDF
npx slidev export

# Export slide notes to PDF
npx slidev export-notes
```

### Other
```bash
# Format markdown slides
npx slidev format

# Theme operations
npx slidev theme [subcommand]
```

## Project Structure

- **slides.md**: Main presentation file (default entry point)
- **package.json**: Defines Slidev dependencies and themes
- **devenv.nix**: Development environment configuration with Node.js/npm setup
- **node_modules/**: npm dependencies (auto-installed)

## Installed Themes & Addons

The project has these Slidev themes and addons available:
- `@slidev/theme-seriph` (default theme)
- `@slidev/theme-apple-basic`
- `slidev-theme-neversink`
- `slidev-theme-hep`
- `slidev-addon-typst` (for Typst math notation)

Switch themes in the frontmatter of slides.md using `theme: <theme-name>`.

## Working with Slides

Presentations are written in markdown format with YAML frontmatter for configuration. The slides.md file uses:
- Frontmatter (between `---`) for slide configuration
- Markdown content for slide content
- `---` separators between slides
- Vue components and UnoCSS classes for styling
- Comments in `<!--` blocks for presenter notes
