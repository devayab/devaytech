# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Devay AB, a Swedish consulting company specializing in software development and digital transformation. The site is built using HTML5 UP's "Paradigm Shift" template.

## Architecture

- **Static HTML website** with two main pages:
  - `index.html` - Main landing page (Swedish language)
  - `contacts.html` - Contact information page
- **CSS/SASS structure**:
  - Main styles in `assets/css/main.css` (compiled)
  - SASS source files in `assets/sass/` with modular structure
  - Uses breakpoint-based responsive design
- **JavaScript**: jQuery-based interactions with scrolling effects and collapsible content
- **Assets**: Images, fonts, and icons organized in `assets/` directory

## Development Workflow

This is a static website with no build process - files are served directly. Changes to SASS files require manual compilation to CSS.

### CSS Development
- SASS source files are in `assets/sass/main.scss`
- Compiled CSS output goes to `assets/css/main.css`
- Uses modular SASS architecture with imports for components, layout, and base styles
- Responsive breakpoints defined: xxsmall (≤360px), xsmall (361-480px), small (481-736px), medium (737-1152px), large (1153-1280px), xlarge (1281-1920px), default (>1681px)

### Content Structure
- Swedish language content focused on consulting services
- Collapsible sections for service offerings on main page
- Contact information and career section on contacts page
- Uses FontAwesome icons and custom typography (Montserrat, Open Sans)

## File Organization

```
/
├── index.html              # Main landing page
├── contacts.html          # Contact page  
├── assets/
│   ├── css/               # Compiled CSS and fonts
│   ├── js/                # JavaScript libraries and custom code
│   ├── sass/              # SASS source files (modular)
│   └── webfonts/          # FontAwesome web fonts
├── images/                # Site images and graphics
└── favicon files          # Various favicon formats
```

## Key Features

- Smooth scrolling navigation
- Collapsible content sections with JavaScript
- Responsive design across all device sizes
- Professional business presentation in Swedish
- LinkedIn integration and contact forms
- Clean, modern aesthetic using HTML5 UP template