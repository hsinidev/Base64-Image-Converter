# ✨ Base64 Image Converter

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A powerful, modern, and visually stunning tool to instantly convert your images into Base64-encoded strings. Perfect for embedding images directly into HTML, CSS, and email templates, all running client-side for maximum speed and privacy.

**A live preview of the application with its dynamic "Nebula" background:**



[**Live Demo**](https://your-live-demo-url.com) &nbsp;&nbsp;•&nbsp;&nbsp; [**Report a Bug**](https://github.com/hsinidev/base64-image-converter/issues) &nbsp;&nbsp;•&nbsp;&nbsp; [**Request a Feature**](https://github.com/hsinidev/base64-image-converter/issues)

---

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## About The Project

This Base64 Image Converter provides a seamless and efficient workflow for developers and designers who need to embed images directly into their code. By converting images to Base64 strings, you can reduce HTTP requests, simplify deployment, and ensure images are always available within your emails or web pages, even if external sources are blocked.

This application replicates the complex, multi-state UI of professional tools like Base64-Image.de, wrapped in a sleek, dark cosmic theme with a dynamic nebula background for a superior user experience.

### Built With

*   **[React 19](https://react.dev/)**: For building a fast and modular user interface.
*   **[TypeScript](https://www.typescriptlang.org/)**: For robust, type-safe code.
*   **[Tailwind CSS](https://tailwindcss.com/)**: For rapid, utility-first styling.
*   **[Vite](https://vitejs.dev/)**: For a blazing-fast development experience.
*   **Pure JavaScript (FileReader API)**: For the core image conversion logic, running entirely in the browser.

---

## Key Features

-   🌌 **Stunning Cosmic Theme**: A beautiful, animated nebula background provides a unique and pleasant workspace.
-   📥 **Drag & Drop Upload**: Easily drag and drop multiple images at once.
-   📂 **File Browser Support**: A classic "click to browse" option is also available.
-   ⚡ **Instant Conversion**: Client-side processing using the FileReader API ensures privacy and speed.
-   🖼️ **Image Preview**: Instantly see a preview of your converted image.
-   📋 **Dual Code Outputs**: Get ready-to-use code for both HTML `<img>` tags and CSS `background-image` properties.
-   ✂️ **One-Click Copy**: Copy the full Base64 string or CSS rule to your clipboard with a single click.
-   📊 **Detailed Information**: View original size, encoded size, and image dimensions for each conversion.
-   📱 **Fully Responsive**: A seamless experience across all devices, from mobile to desktop.
-   🔄 **Multi-State UI**: Clear visual feedback for idle, processing, and completed states.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/hsinidev/base64-image-converter.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd base64-image-converter
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm run dev
    ```
    Your application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

---

## Usage

1.  **Open the application** in your web browser.
2.  **Drag and drop** one or more image files (JPG, PNG, GIF, WebP, SVG, BMP) onto the designated area.
3.  Alternatively, **click the "Click to browse" button** to open your file explorer and select images.
4.  The application will instantly process the images and display the **Encoding Results**.
5.  Each result card shows a preview, file details, and two code blocks.
6.  Click the **"Copy" button** on either the `<img>` or CSS code block to copy the Base64 string to your clipboard.
7.  Click **"Convert more images"** to process another batch.

---

## Project Structure

The project follows a standard React component-based architecture to keep the codebase organized and maintainable.

```
/
├── public/
├── src/
│   ├── components/      # Reusable React components
│   ├── utils/           # Utility functions (e.g., imageConverter.ts)
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # React entry point
│   └── types.ts         # TypeScript type definitions
├── .gitignore
├── index.html         # Main HTML template
├── package.json
├── README.md          # This file
└── tsconfig.json
```

---

## License

Distributed under the MIT License.

---

## Contact

HSINI MOHAMED - [@hsinidev](https://github.com/hsinidev) - hsini.web@gmail.com

Project Link: [https://github.com/hsinidev/base64-image-converter](https://github.com/hsinidev/base64-image-converter)

Website: [doodax.com](https://doodax.com)

---

## Acknowledgements

*   Inspiration from [Base64-Image.de](https://www.base64-image.de/)
*   Icons from [Heroicons](https://heroicons.com/)

