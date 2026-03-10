# PhysicsLLM WordPress Theme

A WordPress theme converted from the PhysicsLLM React/Vite/Tailwind landing page.

## Installation

1. Copy the `wordpress-theme/` folder into `wp-content/themes/physicsllm/` in your WordPress installation.

2. **Compile Tailwind CSS** — from the original React project root, run:

   ```bash
   npx tailwindcss -i src/index.css -o wordpress-theme/assets/css/tailwind.css --minify
   ```

3. **Copy image assets** from the React project:

   ```bash
   cp src/assets/bmbf-logo.png wordpress-theme/assets/images/
   cp src/assets/erum-data-hub-logo.png wordpress-theme/assets/images/
   cp src/assets/aip-logo.jpg wordpress-theme/assets/images/
   cp public/favicon.ico wordpress-theme/assets/images/
   ```

4. Activate the theme in WordPress Admin → Appearance → Themes.

5. Set your homepage to a static page (Settings → Reading → "A static page").

## File Structure

```
physicsllm/
├── style.css              # Theme metadata
├── functions.php          # Enqueue scripts/styles, theme setup
├── index.php              # Default template
├── header.php             # Navbar
├── footer.php             # Footer with logos
├── front-page.php         # Homepage assembling all sections
├── template-parts/
│   ├── hero.php
│   ├── tldr.php
│   ├── project-context.php
│   ├── mission.php
│   ├── capabilities.php
│   ├── use-cases.php
│   ├── objectives.php
│   ├── key-features.php
│   ├── domain-knowledge.php
│   ├── team.php
│   ├── outputs.php
│   ├── infrastructure.php
│   └── call-to-action.php
├── assets/
│   ├── css/
│   │   ├── tailwind.css   # Compiled Tailwind (you generate this)
│   │   └── custom.css     # Animations & extras
│   ├── js/
│   │   ├── main.js        # Mobile menu + smooth scroll
│   │   └── neural-network.js  # Canvas animation
│   └── images/            # Copy logos here
└── README.md
```

## Notes

- Lucide icons from the React version have been replaced with emoji equivalents. For production, consider using [Lucide's SVG sprites](https://lucide.dev/) or an icon font.
- The neural network canvas animation is a vanilla JS port of the original React component.
- All content is static. To make sections editable via WordPress admin, convert them to use ACF (Advanced Custom Fields) or native WordPress customizer settings.
