# Academic Custom Theme for Slidev

A professional academic-style theme for Slidev presentations.

## Color Scheme

The theme uses a consistent color palette across all layouts:

- **Primary Accent**: Purple (`#c179fb`) - Used for separator lines, numbering, and accent elements
- **Secondary Accent**: Blue - Light mode (`#1e40af`), Dark mode (`#60a5fa`) - Used for footer and secondary accents
- **Light Mode**: White background (`#ffffff`) with dark gray text (`#111827`)
- **Dark Mode**: Dark background (`#1a1a1a`) with white text (`#ffffff`)
- **Alternative Backgrounds**: Light gray (`#f3f4f6`) for light mode, Medium gray (`#444444`) for dark mode

### Using Colors

You can use the predefined color variables and shortcuts:

**CSS Variables:**
```css
var(--color-primary)        /* Purple accent */
var(--color-bg-main)        /* Adaptive background */
var(--color-text-main)      /* Adaptive text color */
```

**UnoCSS Shortcuts:**
```html
<div class="bg-main text-main">        <!-- Adaptive background and text -->
<div class="accent-primary">           <!-- Purple text -->
<div class="bg-accent-primary">        <!-- Purple background -->
```

## Features

- **Global Footer**: Automatic footer on all slides (except intro and toc) with:
  - Left: Presentation title (configured via `footerTitle`)
  - Center: Slide counter (current/total)
  - Right: Occasion/context (configured via `footerOccasion`)
  - Adaptive colors: deep blue for light mode, neon blue for dark mode
  - Configure `footerTitle` and `footerOccasion` in the first slide's frontmatter

- **Intro Layout**: Professional academic intro slide with:
  - Main title positioned middle-left with separator line
  - Occasion/context field (conference, subject, etc.)
  - Support for main authors and co-authors
  - Configurable date
  - Background image support with adjustable opacity
  - Customizable text color
  - Lower-left corner logo section (supports 3+ logos)
  - Semi-transparent overlay for better readability

- **Table of Contents Layout**: Clean TOC slide with:
  - Customizable title (default: "Table of Contents")
  - Numbered list of sections
  - Configurable accent color for numbering
  - Background image support with adjustable opacity
  - Customizable text colors
  - Consistent academic styling with separator line
  - Responsive sizing for 1-5, 6-8, and 9+ items

## Usage

In your slides frontmatter:

```yaml
---
theme: ./academic_custom
---
```

## Available Layouts

### `intro`

Academic introduction slide.

**Frontmatter options:**
- `title`: Main presentation title
- `occasion`: Event/context for the presentation (e.g., conference, university subject)
- `authors`: Array or string of main authors
- `coAuthors`: Array or string of co-authors
- `date`: Presentation date
- `background`: Background image path
- `backgroundOpacity`: Overlay opacity (0.0-1.0, default: 0.6)
- `textColor`: Text color (hex or CSS color, default: white)
- `logos`: Array of logo image URLs/paths

**Example:**
```yaml
---
layout: intro
background: ./path/to/image.jpg
backgroundOpacity: 0.5  # Optional: adjust overlay darkness (0.0-1.0)
textColor: "#ffffff"    # Optional: customize text color (default: white)
title: Your Presentation Title
occasion: Computer Graphics - Final Project  # Optional: conference/subject/event
authors:
  - Dr. John Smith
  - Dr. Jane Doe
coAuthors:
  - Alice Johnson
  - Bob Williams
date: October 12, 2025
logos:
  - ./path/to/logo1.png
  - ./path/to/logo2.png
  - ./path/to/logo3.png
# Footer configuration (displayed on all content slides)
footerTitle: Your Presentation Title
footerOccasion: Computer Graphics - Final Project
---
```

### `toc`

Table of Contents layout for listing presentation sections.

**Frontmatter options:**
- `tocTitle`: Title for the table of contents (default: "Table of Contents")
- `tocItems`: Array of section titles to display
- `background`: Background image path
- `backgroundOpacity`: Overlay opacity (0.0-1.0, default: 0.6)
- `textColor`: Text color (hex or CSS color, default: white)
- `accentColor`: Color for numbering (hex or CSS color, default: blue-400)

**Example:**
```yaml
---
layout: toc
background: ./path/to/image.jpg
backgroundOpacity: 0.7
tocTitle: Agenda
textColor: "#ffffff"
accentColor: "#60a5fa"
tocItems:
  - Introduction
  - Background and Motivation
  - Methodology
  - Results and Analysis
  - Conclusions and Future Work
---
```

### `title-page`

Section title page with diagonal split design. Similar to TOC layout but displays only a title. No footer is shown on this layout.

**Frontmatter options:**
- `title`: Section title to display
- `background`: Background image path

**Example:**
```yaml
---
layout: title-page
title: Methodology
background: ./path/to/image.jpg
---
```

### `default`

Standard content slide with optional title and purple separator.

**Frontmatter options:**
- `title`: Slide title (optional) - displays in upper left corner with purple separator

**Example:**
```yaml
---
layout: default
title: Key Concepts
---

Your slide content here...
```

### `image-right`

Two-column layout with text on the left and images on the right. Images appear sequentially with click events.

**Frontmatter options:**
- `title`: Slide title (optional) - displays in upper left corner with purple separator
- `images`: Single image path or array of image paths (1-2 images recommended)
- `imageLayout`: Layout direction for images - `'vertical'` (default, stacked) or `'horizontal'` (side by side)

**Example:**
```yaml
---
layout: image-right
title: Experimental Results
imageLayout: vertical  # or 'horizontal'
images:
  - ./path/to/image1.png
  - ./path/to/image2.png
---

Your text content appears on the left side.

- First bullet point
- Second bullet point

Images will appear on the right side sequentially as you click through the slide.
---
```

## Development

This theme uses:
- Vue 3 components
- UnoCSS for styling
- Slidev's built-in frontmatter system

## License

MIT
