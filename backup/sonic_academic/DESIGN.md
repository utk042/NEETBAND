---
name: Sonic Academic
colors:
  surface: '#07122d'
  surface-dim: '#07122d'
  surface-bright: '#2e3855'
  surface-container-lowest: '#030d27'
  surface-container-low: '#101a35'
  surface-container: '#141f3a'
  surface-container-high: '#1f2945'
  surface-container-highest: '#2a3450'
  on-surface: '#dae2ff'
  on-surface-variant: '#d1c5af'
  inverse-surface: '#dae2ff'
  inverse-on-surface: '#25304b'
  outline: '#99907b'
  outline-variant: '#4d4635'
  surface-tint: '#ecc246'
  primary: '#ecc246'
  on-primary: '#3d2e00'
  primary-container: '#c9a227'
  on-primary-container: '#4b3a00'
  inverse-primary: '#755b00'
  secondary: '#b7c4ff'
  on-secondary: '#002683'
  secondary-container: '#1c3faa'
  on-secondary-container: '#a4b5ff'
  tertiary: '#b7c4ff'
  on-tertiary: '#172b6d'
  tertiary-container: '#92a3ed'
  on-tertiary-container: '#253779'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe08e'
  primary-fixed-dim: '#ecc246'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001452'
  on-secondary-fixed-variant: '#193ca7'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001452'
  on-tertiary-fixed-variant: '#304285'
  background: '#07122d'
  on-background: '#dae2ff'
  surface-variant: '#2a3450'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is built on a "Premium Academic Performance" narrative, merging the immersive, focused environment of a high-end music streaming application with the structured rigor of competitive Indian education. The aesthetic is strictly dark-mode, utilizing deep navy depths to reduce eye strain during long study sessions, while using gold as a high-energy "signal" color for achievement and progression.

The style is a blend of **Minimalism** and **Glassmorphism**. It avoids all traditional "classroom" tropes (pens, paper, chalkboards) in favor of digital-first, sleek interfaces that treat educational content like premium media. The target audience—CBSE students and their parents—should perceive the platform as a sophisticated tool that elevates the act of studying into a high-performance activity.

## Colors
The palette is dominated by **Deep Navy (#010E30)** to provide a cinematic, focused backdrop. **Primary Gold (#C9A227)** is used sparingly but impactfully for "Hero" actions, progress indicators, and interactive highlights, creating a "Gold Standard" association.

- **Secondary Navy (#012F9C):** Used for persistent structural elements like sidebars or navigation headers to provide subtle definition against the background.
- **Surface/Cards (#021A5E):** Elevates content blocks from the background, providing a distinct container for lessons, quizzes, and modules.
- **Muted Text (#A0AACC):** Used for secondary information, metadata (e.g., video duration, "3 weeks ago"), and inactive states to maintain a clear visual hierarchy.

## Typography
This design system utilizes **Plus Jakarta Sans** for headlines to provide a modern, energetic, and slightly tech-forward feel. Its geometric nature scales perfectly from large hero banners to smaller section headers.

**Inter** is utilized for all body copy and UI labels. It provides the necessary clarity for complex educational text (mathematical formulas, science definitions) and remains legible at small sizes within dense dashboards. 

Use `label-md` with uppercase styling for all navigation items and category tags to mimic the "Browse" feeling of music applications.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

- **The Sidebar:** Mimicking music apps, a fixed 240px left-hand navigation is preferred on desktop for quick access to "Playlists" (Subject Units) and "Library" (My Courses).
- **The Player Bar:** A persistent bottom bar (80px height) should track learning progress, showing the current lesson title and a "Progress Scrubber" in Primary Gold.
- **Rhythm:** Use the 8px base unit. Component padding should lean towards `md` (24px) to ensure the interface feels spacious and premium, never cramped or "busy."

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Subtle Glows** rather than traditional drop shadows.

1.  **Level 0 (Background):** Deep Navy (#010E30).
2.  **Level 1 (Cards/Surfaces):** Surface Navy (#021A5E) with no shadow.
3.  **Level 2 (Interaction):** On hover, cards do not lift; instead, they gain a 1px inner border of Primary Gold and a soft 15px outer Gaussian blur (glow) using the Primary Gold at 20% opacity.
4.  **Glassmorphism:** Use a 20px backdrop blur on the bottom Player Bar and top Navigation Bar to allow content to scroll underneath while maintaining context.

## Shapes
The design system uses **Rounded (0.5rem/8px)** corners as the standard. This strikes a balance between the precision of professional software and the approachability required for K-12 students.

- Standard Elements: 8px radius (Input fields, Cards).
- Pill Elements: Fully rounded (Buttons, Chips, Tags, "Play Lesson" buttons).
- Media Thumbnails: 12px radius to make them feel like "Featured Content" objects.

## Components
- **Buttons:** Always use fully rounded pill-like shapes (rounded-full / 9999px border radius). Primary buttons use a solid Gold (#C9A227) background with black text for maximum contrast. Secondary buttons use a Navy (#012F9C) background with a Gold border. 
- **Learning Chips:** Small, pill-shaped tags used for "Subject Tags" (e.g., Physics, Class 10). They use a subtle #012F9C background with White text.
- **Lesson Lists:** Mimic a tracklist. On hover, the background should shift to a slightly lighter navy, and a "Play" icon should appear in Gold at the far left.
- **Progress Scrubber:** A horizontal bar used in the bottom persistent player. The "played" portion is Gold, the "remaining" portion is a muted Navy.
- **Input Fields:** Dark surfaces (#010E30) with a 1px border of #012F9C. On focus, the border transitions to Gold.
- **Cards:** Used for course selection. They feature a high-quality "Album Art" style image at the top, a title in Plus Jakarta Sans, and a gold progress bar at the very bottom edge.