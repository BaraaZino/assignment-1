# Baraa Zino Portfolio

A single-page personal portfolio highlighting experience, projects, awards, and ways to connect. Built for the SWE363 Assignment 1 deliverable.

## Features
- Responsive layout with sections for About, Experience, Projects, Awards, Skills, and Contact
- Light/dark theme toggle that honors the system preference and remembers the user's choice
- Dynamic greeting, live year in the footer, and sticky header that reacts to scroll position
- Accessible contact form with client-side validation and friendly confirmation messages
- Modular CSS using design tokens for quick theming and consistent styling

## Tech Stack
- HTML5 for layout and semantic structure (`index.html`)
- Modern CSS with custom properties and responsive grid utilities (`css/styles.css`)
- Vanilla JavaScript modules for theming, UI interactions, and form handling (`js/script.js`)

## Project Structure
```
.
├── assets/
│   └── images/
│       └── baraa_zino.jpg 
|       └──assets/images/DSC_5707_with_watermark_50.jpg
|       └──assets/images/OCR.jpg
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
└── index.html
```

## Getting Started
1. Clone the repository or download the project files.
2. Open `index.html` directly in your browser, or serve the folder with a simple HTTP server (e.g., `python3 -m http.server`).
3. Toggle the theme button, scroll the page, and submit the form to explore the interactions.

## Customization Tips
- **Content:** Update text in `index.html` to reflect new achievements or projects.
- **Images:** Replace files in `assets/images/`.
- **Styling:** Adjust colors, spacing, or typography in `css/styles.css`. Design tokens at the top control the overall theme.
- **JavaScript:** Extend or tweak UI behavior in `js/script.js`. Each feature (theme, greeting, contact form, footer, header) is wrapped in a small module for clarity.

## Notes
- The contact form currently performs client-side validation only; connect it to a backend or service (e.g., Formspree, Netlify Forms) for real submissions.
- Supplementary write-ups or reports for the assignment live under `docs/`.



## Deployed Webpage on GitHub
- https://baraazino.github.io/assignment-1/