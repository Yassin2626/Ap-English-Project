# Manga Reader

A minimal, dark-themed single-page scroll-based website for displaying manga pages. Built for speed and security.

## Features

- **Dark Theme**: Rich, solid dark colors (#0a0e27 background)
- **Image Protection**: Right-click disabled, no drag-and-drop, no long-press context menu
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Pure Scroll**: Smooth vertical scrolling with no pagination or UI clutter
- **Fast**: Lightweight HTML/CSS/JS with no dependencies
- **Vercel Ready**: Deploy instantly with zero configuration

## Setup

1. Add your 6 manga pages to the `images/` folder:
   - `page1.png`
   - `page2.png`
   - `page3.png`
   - `page4.png`
   - `page5.png`
   - `page6.png`

2. Images should be in portrait orientation (9:16 aspect ratio recommended)

## Deploy on Vercel

1. Push this repository to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will auto-detect it as a static site and deploy instantly
4. No build configuration needed!

## File Structure

```
.
├── index.html      # Main page structure
├── style.css       # Styling with dark theme
├── script.js       # Image protection & scroll behavior
├── vercel.json     # Vercel deployment config
└── images/         # Manga page images (replace placeholders)
```

## Image Protection Details

- CSS background-image rendering (prevents "Open image in new tab")
- Right-click context menu disabled
- Drag-and-drop prevented
- Long-press context menu blocked on mobile
- Text selection disabled on images

## Local Development

Simply open `index.html` in your browser. No build tools or server required!

---

Made with simplicity in mind. Pure HTML/CSS/JS. No frameworks. No bloat.
