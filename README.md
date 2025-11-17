# 🐾 Pets Are The Best - Chrome Extension

A fun Chrome extension that celebrates our love for pets! Get random pet facts and keep track of how many times you've petted a pet today.

## Features

- 🎲 Random pet facts about dogs, cats, rabbits, hamsters, birds, and more!
- 🤗 Pet counter to track your daily pet interactions
- 💾 Persistent storage using Chrome's storage API
- 🎨 Beautiful, modern UI with smooth animations

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Build the extension
npm run build
```

## Loading the Extension in Chrome

1. **Build the extension** (if you haven't already):
   ```bash
   npm run build
   ```

2. **Open Chrome Extensions page**:
   - Go to `chrome://extensions/` in your Chrome browser
   - Or click the three dots menu → More Tools → Extensions

3. **Enable Developer Mode**:
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the extension**:
   - Click the "Load unpacked" button
   - Navigate to the `dist` folder inside this project
   - Select the folder and click "Open"

5. **Use the extension**:
   - Click the extension icon in your Chrome toolbar
   - Enjoy random pet facts and pet the pets! 🐾

## Project Structure

```
pets-are-the-best/
├── public/
│   ├── manifest.json    # Chrome extension manifest
│   └── icon.svg         # Extension icon
├── src/
│   ├── App.tsx          # Main React component
│   ├── App.css          # Styles
│   ├── index.css        # Global styles
│   ├── main.tsx         # Entry point
│   └── chrome.d.ts      # Chrome API type declarations
├── dist/                # Built extension (generated)
└── vite.config.ts       # Vite configuration
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Chrome Extension Manifest V3** - Latest extension API

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the extension for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Making Changes

1. Edit the source files in the `src/` folder
2. Run `npm run build` to rebuild the extension
3. Click the refresh button on the extension card in `chrome://extensions/`
4. Click the extension icon to see your changes

## License

Made with ❤️ for all pet lovers!
