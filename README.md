# SupplyLink — System Analysis & Design DFD Presentation (Red Noir Edition)

A complete, high-contrast, animated web-based slide deck presenting the **SupplyLink** Supplier-Merchant Ordering and Delivery Platform. Designed for the **System Analysis and Design** course at **HiLCoE School of Computer Science and Technology**.

Crafted in an ultra-modern **Red Noir** aesthetic (pitch black canvas, ambient crimson glows, glassmorphism, and large projector-ready typography) adhering strictly to **Gane and Sarson** Data Flow Diagram (DFD) notation and academic rigor.

---

## Key Features

- **Red Noir Design System**:
  - Pitch black canvas (`#000000`) with subtle geometric grid overlay and radial crimson glows
  - Electric crimson red accent (`#ef233c`) with neon pulse effects
  - Large, bold typography using **Manrope** and **Inter** (all text is crisp, high-contrast, and easily readable from across any auditorium)
  - Glassmorphic panels (`bg-zinc-950/80 border border-white/10 backdrop-blur-xl`)
- **Gane and Sarson Notation**:
  - **External Entities**: Plain rectangles with cyan/teal neon borders (Merchant, Supplier, Admin)
  - **Processes**: Rounded rectangles with dedicated top ID boxes (0, 1.0–6.0) and verb-phrase names
  - **Data Stores**: Open-ended rectangles with left ID boxes (D1–D5) and noun-phrase names
  - **Data Flows**: High-contrast labeled arrows with large dark badges and animated crimson pulses
- **7-Slide Presentation Structure**:
  1. **Title**: High-impact branding for HiLCoE School of Computer Science & Technology
  2. **Project Overview**: Problem, Solution Idea, and animated Highlight Line reveal
  3. **External Entities**: Detailed Source & Sink role breakdown for Merchant, Supplier, and Admin
  4. **Context Diagram**: Step-by-step build of central Process 0 and boundary flows
  5. **Level 0 DFD**: Functional decomposition into 6 processes and 5 persistent data stores
  6. **Scenario Walkthrough**: Interactive click-through tracing operational steps (a) through (f)
  7. **Executive Summary**: Core architectural synthesis, operational impact, and modeling rigor (no questions, no team members)
- **100% Offline Capability**: All fonts (`@fontsource/manrope`, `@fontsource/inter`) and assets run locally with zero runtime network requests.
- **Presenter Tools**:
  - Presenter notes drawer (<kbd>N</kbd> key) with 2-3 concise speaking points per slide
  - Fullscreen mode (<kbd>F</kbd> key)
  - Thin crimson progress bar and slide/step counters
  - Specialized `?print` URL mode for 16:9 PDF export

---

## File Structure

```text
sys design/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── config.js
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── MinimalLineNav.jsx
    │   ├── PresenterNotes.jsx
    │   ├── Slide.jsx
    │   └── Step.jsx
    ├── diagrams/
    │   ├── DataStore.jsx
    │   ├── Diagram.jsx
    │   ├── Entity.jsx
    │   ├── Flow.jsx
    │   ├── Legend.jsx
    │   └── diagramData.js
    └── slides/
        ├── Slide1Title.jsx
        ├── Slide2Intro.jsx
        ├── Slide3Entities.jsx
        ├── Slide4Context.jsx
        ├── Slide5Level0.jsx
        ├── Slide6Walkthrough.jsx
        └── Slide7Summary.jsx
```

---

## Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Building for Production

```bash
npm run build
```

Generates optimized, standalone production assets in the `dist/` directory. Preview with:

```bash
npm run preview
```

---

## PDF Export Instructions

1. Navigate to:
   ```text
   http://localhost:3000/?print
   ```
   *(Or click the **PDF Export** button in the bottom control bar)*.
2. Open the browser print dialog (<kbd>Ctrl</kbd> + <kbd>P</kbd> or <kbd>Cmd</kbd> + <kbd>P</kbd>).
3. Set **Destination** to **Save as PDF**.
4. Set **Layout** to **Landscape**.
5. Check **Background graphics** under More Settings.
6. Set **Margins** to **None**.
7. Click **Save**.

---

## Keyboard Controls

| Key | Action |
| :--- | :--- |
| <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd> | Next step / Next slide |
| <kbd>←</kbd> / <kbd>Backspace</kbd> / <kbd>PageUp</kbd> | Previous step / Previous slide |
| <kbd>F</kbd> | Toggle Fullscreen mode |
| <kbd>N</kbd> | Toggle Presenter Notes panel |
| <kbd>Home</kbd> | Jump to Title slide |
| <kbd>End</kbd> | Jump to Executive Summary slide |
