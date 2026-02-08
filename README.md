# 🌐 Orbital Canvas - Interactive 3D Globe

A stunning, interactive 3D visualization experiment exploring the boundaries of web-based graphics with React, Three.js, and React Three Fiber.


## 📖 Overview

**Orbital Canvas** is a modern web application that renders a highly customizable, interactive 3D globe directly in your browser. It serves as both a visual art piece and a technical demonstration of modern web graphics capabilities.

Users can manipulate the globe in real-time, adjusting its geometry, visual effects, and environment. From distorting the sphere's mesh to applying cinematic post-processing effects like Bloom and Glitch, this project offers a playground for exploring 3D rendering concepts.

Whether you are a developer looking to learn about WebGL or a designer seeking visual inspiration, Orbital Canvas provides a hands-on experience with the latest 3D web technologies.

---

## ✨ Key Features

*   **🌐 Interactive 3D Globe**: A dynamic sphere that responds to user input, featuring wireframe rendering and real-time mesh distortion.
*   **🎨 Cinematic Post-Processing**: advanced visual effects pipeline including **Bloom** (glow), **Glitch** (digital distortion), **DotScreen** (retro style), and **Noise** (film grain).
*   **🎛️ Real-time Controls**: Full control over the scene parameters via a floating GUI (Leva). Adjust deformation, speed, colors, and effect intensities instantly.
*   **🌌 Immersive Environment**: Set against a generated starfield with customizable atmospheric lighting and environmental presets (City, Sunset, Dawn, etc.).
*   **📷 Orbit Controls**: Intuitive camera navigation allowing users to rotate, zoom, and pan around the 3D object.
*   **📱 Responsive Design**: Includes a toggleable fullscreen mode for a fully immersive experience.

---

## 🛠️ Technology Stack

This project leverages a cutting-edge stack focused on performance and developer experience:

*   **Core Language**: ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript** - For type-safe, maintainable code.
*   **Framework**: ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React 19** - For building the user interface and component management.
*   **3D Engine**: ![Three.js](https://img.shields.io/badge/Three.js-black?style=flat&logo=three.js&logoColor=white) **Three.js** - The standard for 3D graphics on the web.
*   **Renderer**: **React Three Fiber (R3F)** - A powerful React renderer for Three.js.
*   **Build Tool**: ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite** - For lightning-fast development and building.
*   **Testing**: **Vitest** - For unit and integration testing.

---

## 🧠 Educational Insights & Concepts Learned

This project is not just code; it's a learning journey. Here are the key technical concepts and skills demonstrated:

### 1. Declarative 3D Scenes with React Three Fiber (R3F)
Unlike vanilla Three.js which requires imperative code (e.g., `scene.add(mesh)`), R3F allows us to build 3D scenes **declaratively** using components.
*   **Concept**: We treat 3D objects (meshes, lights, cameras) just like HTML DOM elements (`<div>`, `<span>`).
*   **Benefit**: This makes the 3D state easy to manage with standard React hooks like `useState` and `useEffect`.

### 2. Shaders and Materials
The globe uses a `MeshDistortMaterial`, which is a special material that modifies the **vertex shader**.
*   **Vertex Shader**: A program that runs on the GPU to position every point (vertex) of the 3D geometry.
*   **Distortion**: By mathematically altering these positions over time (using a sine wave or noise function), we create the "wobbly" liquid effect seen on the globe.

### 3. Post-Processing Pipelines
The visual effects (Bloom, Glitch) are applied using a **Post-Processing Chain**.
*   **How it works**: The 3D scene is rendered to an off-screen buffer (texture). Then, shaders run over this 2D image to apply effects before it's finally drawn to the screen.
*   **Lesson**: Understanding render passes is crucial for achieving "cinematic" looks in real-time graphics.

### 4. Interactive Tweakpanes
We use **Leva** to create the control panel.
*   **Rapid Prototyping**: Exposing variables (speed, color, intensity) to a GUI allows designers and developers to "tune" the application in real-time without changing code, significantly speeding up the creative process.

---

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites
*   **Node.js** (v18 or higher recommended)
*   **npm** or **yarn**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anirudhagarwal-dev/Orbital_Canvas.git
    cd Orbital_Canvas
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Development Server

Start the local development server with hot-reloading:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

Create an optimized build for deployment:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Running Tests

Run the test suite to ensure everything is working correctly:
```bash
npm test
```

---

## 🎮 Controls & Usage

Once the application is running, you will see the globe and a control panel on the right.

| Control Group | Parameter | Description |
| :--- | :--- | :--- |
| **Globe** | `Deform Amount` | Controls how much the sphere distorts/wobbles. |
| | `Transparency` | Adjusts the opacity of the globe mesh. |
| | `Wireframe` | Toggles the wireframe view on/off. |
| | `Color` | Picks the base color of the globe material. |
| | `Speed` | Sets the rotation and animation speed. |
| **Scene** | `Environment` | Changes the lighting/reflection map (e.g., City, Sunset). |
| **Effects** | `Bloom` | Adds a glowing effect to bright areas. |
| | `Glitch` | Simulates digital signal corruption/artifacts. |
| | `DotScreen` | Applies a retro halftone newsprint effect. |

**Pro Tip**: Click the **"Orbital Canvas"** title in the bottom right corner to toggle **Fullscreen Mode**.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new effects, better controls, or performance improvements:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

This project is licensed under the ISC License.