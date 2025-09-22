# Technical Documentation

## Overview
This project is a responsive single-page portfolio site built with HTML, CSS, and vanilla JavaScript. It showcases personal information, professional experience, awards, AI-focused projects and research, plus a contact form with client-side interactivity.

## Architecture
- `index.html` defines the semantic layout for About, Experience, Skills, Projects & Research, Awards, and Contact sections.
- `css/styles.css` styles the UI using CSS custom properties, Flexbox, and Grid to provide responsive behavior across breakpoints.
- `js/script.js` organizes interactive features into small modules that initialize after the DOM is loaded.
- `assets/images/` contains images that are used in the webpage.

## Responsive Design Strategy
- Uses CSS Grid for the project gallery, awards showcase, and experience cards, automatically fitting content based on available width.
- Applies Flexbox for header alignment, hero call-to-actions, and footer spacing.
- Media queries at 900px and 600px adjust layout: the hero collapses to a single column on tablets and navigation stacks vertically on mobile.
- Typography scales with `clamp()` to maintain readability on different viewports.

## JavaScript Features
- **Theme toggle:** Persisted light/dark mode via `localStorage`, with a fallback to the user's system preference.
- **Dynamic greeting:** Updates a hero message based on the visitor's local time.
- **Contact form feedback:** Validates required fields with `checkValidity()` and displays inline messaging instead of submitting to a backend.
- **Footer year:** Automatically injects the current year in the footer to keep content up to date.

All modules are initialized on the `DOMContentLoaded` event to ensure DOM elements are available before interaction.

## Accessibility Considerations
- Semantic HTML elements (`header`, `nav`, `main`, `section`, `footer`) support screen reader navigation.
- `aria-live` regions announce dynamic greeting and form feedback updates.
- Color contrast values were selected to retain readability in both light and dark modes.
- Buttons, links, and inputs provide visible focus states and large tap targets.

## Running Locally
No build tools are required. Open `index.html` in any modern browser. For live reloading, serve the project directory with a lightweight HTTP server such as `python -m http.server` or VS Code Live Server.

## Testing and Validation
- Manually resized the browser window to verify responsive breakpoints.
- Tested the contact form in desktop Chrome to ensure validation and messaging behave as expected.
- Checked theme toggle persistence by reloading the page after toggling modes.
