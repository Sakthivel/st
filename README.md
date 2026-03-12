# Basic Website with Logo, Login Button, and Banner

A simple, accessible, and responsive website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Mobile-first approach with fluid layouts
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation support
- **Modern UI**: Clean design with smooth transitions
- **Security**: XSS prevention and input sanitization
- **Performance**: Optimized CSS and minimal JavaScript

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # Stylesheet with responsive design
├── script.js       # JavaScript for interactivity
├── logo.svg        # Company logo (SVG format)
├── banner.jpg      # Banner image (placeholder - replace with actual image)
└── README.md       # This file
```

## Setup Instructions

1. **Replace the banner image**: Add your own `banner.jpg` file (recommended size: 1920x600 pixels)
2. **Customize the logo**: Edit `logo.svg` or replace it with your own logo
3. **Open in browser**: Simply open `index.html` in any modern web browser

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    /* ... other variables */
}
```

### Content
Modify the text content in `index.html` to match your needs.

### Login Functionality
The login button currently shows an alert. To implement actual authentication:
1. Open `script.js`
2. Modify the `handleLogin()` function
3. Add your authentication logic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility Features

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Sufficient color contrast (4.5:1 ratio)
- Respects `prefers-reduced-motion`

## Performance

- Minimal external dependencies
- Optimized CSS with modern properties
- Efficient JavaScript with event delegation
- Responsive images support

## Security

- XSS prevention through proper content escaping
- Input sanitization functions
- No inline scripts or styles (except for dynamic skip-link)

## License

Free to use for personal and commercial projects.

## Notes

- Replace `banner.jpg` with an actual image file for the banner to display properly
- The logo is currently a simple SVG placeholder - customize it to match your brand
- For production use, consider minifying CSS and JavaScript files
