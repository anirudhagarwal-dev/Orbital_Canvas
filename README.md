# Orbital Canvas - Globe

A modern, interactive 3D Globe visualization built with React, Three.js, and React Three Fiber.

## Features

- **Interactive 3D Globe**: A wireframe globe with distortion effects.
- **Post-Processing**: Bloom, Glitch, DotScreen, and Noise effects.
- **Controls**: Full customization via a GUI (Leva) and OrbitControls for navigation.
- **Immersive Environment**: Starfield background and atmospheric lighting.
- **Modern Stack**: Built with Vite, React, TypeScript, and Vitest.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

4.  **Run Tests**:
    ```bash
    npm test
    ```

## Controls

Use the panel on the right (Leva) to adjust:
- **Globe**: Deformation amount, transparency, wireframe, color, speed.
- **Bloom**: Strength, radius, threshold.
- **Glitch**: Active state, ratio.
- **DotScreen**: Active state, scale.
- **Noise**: Active state, opacity.

Click the title on the bottom right to toggle fullscreen.

## Architecture

- **`src/App.tsx`**: Main entry point, Canvas setup, and scene composition.
- **`src/Globe.tsx`**: The deformable sphere component.
- **`src/Effects.tsx`**: Post-processing effects pipeline.
- **`src/UI.tsx`**: Overlay UI components.
- **`src/test/`**: Unit tests configuration and files.