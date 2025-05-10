# Website Builder

A modern, extensible drag-and-drop website builder built with React, Zustand, and DnD Kit. Effortlessly create, customize, and preview responsive websites with a rich set of configurable elements.

---

## Features

- **Drag & Drop Interface:** Intuitive UI for adding and arranging elements.
- **Customizable Elements:** Headings, paragraphs, images, buttons, sections, columns, contact forms, and maps.
- **Live Properties Panel:** Edit properties of selected elements in real time.
- **Undo/Redo:** Full history support for safe experimentation.
- **Responsive Preview:** Switch between desktop, mobile, and preview modes.
- **Persistent Storage:** Save and load your website structure using local storage.
- **Modern Stack:** Built with React 18, Zustand for state management, and Tailwind CSS for styling.

---

## Folder Structure

```
WEBSITE BUILDER/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── elements/        # Element renderers (e.g., headings, images)
│   │   ├── Canvas.tsx       # Main canvas for drag-and-drop
│   │   ├── CanvasSection.tsx
│   │   └── ...              # Other UI components
│   ├── store/               # Zustand state management
│   │   └── store.ts
│   ├── types/               # TypeScript types and interfaces
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind and global styles
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json
├── tsconfig.json
└── vite.config.ts           # Vite configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone 
cd website-builder
npm install
# or
yarn install
```

### Running the Development Server

```sh
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

---

## Customization

- **Add New Elements:** Extend `src/types/element.ts` and add new components in `src/components/elements/`.
- **Styling:** Modify Tailwind config in `tailwind.config.js` and global styles in `src/index.css`.

---

## License

This project is licensed under the MIT License.

---

**Crafted with React, Zustand, DnD Kit, and Tailwind CSS.**
