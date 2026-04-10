# Orbital Canvas UI Style Guide

## Typography
- Font: Inter, system sans
- Weights: 400, 500, 600, 700
- Scale:
  - H1: 2.5rem
  - H2: 2rem
  - H3: 1.5rem
  - H4: 1.25rem
  - H5: 1.125rem
  - H6: 1rem
  - Body: 1rem
  - Caption: 0.875rem
- Classes: h1–h6, body, caption
- Contrast: Minimum 4.5:1 on all text against backgrounds

## Color System
- Primary: #0ea5e9
- Secondary: #6366f1
- Accent: #f59e0b
- Semantic:
  - Success: #22c55e
  - Warning: #f59e0b
  - Error: #ef4444
  - Info: #0ea5e9
- Backgrounds:
  - Dark: bg #0b0f1a, surface #111827
  - Light: bg #f8fafc, surface #ffffff
- Tokens exposed via CSS variables for both themes

## Spacing and Layout
- Grid: 8px base
- Spacing: 8, 16, 24, 32, 48
- Classes: p-8/16/24/32/48, m-8/16/24/32/48, rounded
- Elevation: shadow levels 1dp, 2dp, 4dp, 8dp via elev-1/2/4/8
- Breakpoints: 320px, 768px, 1024px with responsive typography adjustments

## Components
- Buttons: btn + btn-primary/secondary/accent
  - States: hover, active, disabled, focus-visible
  - Transition: 200–300ms
- Inputs: input, input-error, helper-text, error-text
  - States: focus ring, error border
- Cards: card with elevation and hover lift
- Skeleton: shimmer animation for placeholders
- Spinner: accessible loading indicator
- Progress Bar: progress + progress-bar with animated width
- Toasts: toast-container, toast with success/warning/error/info variants

## Micro-interactions
- Smooth scroll behavior
- Subtle hover lifts and elevation changes
- Skeletons for content loading
- Toast notifications for feedback

## Icons and Imagery
- Inline SVG icons for success, warning, error, info, close, spinner
- LazyImage component with loading=lazy, alt text, skeleton placeholder, error fallback

## Dark Mode
- Theme toggle sets data-theme="dark|light" on html
- Tokens invert for light theme with accessible contrast preserved
- Preference detection via prefers-color-scheme with local persistence

## Accessibility
- WCAG 2.1 AA
- Focus-visible rings on interactive elements
- ARIA attributes on spinner, progress, toasts
- Semantic class usage for text hierarchy
- Color contrast maintained across themes

## Cross-Browser
- Modern CSS features chosen with wide support
- Vendor-prefixed backdrop-filter retained for Safari
- Verified on Chrome, Firefox, Safari, Edge

## Usage
- Import src/index.css globally
- Use components from src/DesignSystem.tsx
- See in-app Style Guide overlay for live tokens and components
