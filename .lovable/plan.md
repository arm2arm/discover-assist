

# Manual Conversion: React Site → WordPress Theme

This is a guide for converting your PhysicsLLM React application into a WordPress theme outside of Lovable. Since WordPress requires PHP and a server environment, this work must be done in a local WordPress development setup.

## Prerequisites

- A local WordPress installation (e.g., via Local by Flywheel, XAMPP, or Docker)
- Basic familiarity with PHP and WordPress template hierarchy
- Export your code from Lovable via GitHub integration

## Step-by-Step Conversion Plan

### 1. Create the WordPress Theme Scaffold

Create a folder in `wp-content/themes/physicsllm/` with these required files:

- `style.css` — Theme metadata header + all your Tailwind-compiled CSS
- `functions.php` — Enqueue styles/scripts, register menus
- `index.php` — Main template
- `header.php` — Navbar markup (from `Navbar.tsx`)
- `footer.php` — Footer markup (from `Footer.tsx`)
- `front-page.php` — Homepage template with all sections

### 2. Compile Tailwind CSS to a Static File

Run `npx tailwindcss -o style-output.css --minify` against your current source. This produces a single CSS file containing all used utility classes. Include it in `style.css` after the WordPress theme header comment block.

### 3. Convert Each React Component to PHP Partials

Each component becomes a PHP template part in a `template-parts/` folder:

| React Component | WordPress File |
|---|---|
| `Hero.tsx` | `template-parts/hero.php` |
| `TLDRPanel.tsx` | `template-parts/tldr.php` |
| `ProjectContext.tsx` | `template-parts/project-context.php` |
| `Mission.tsx` | `template-parts/mission.php` |
| `AgenticCapabilities.tsx` | `template-parts/capabilities.php` |
| `UseCases.tsx` | `template-parts/use-cases.php` |
| `Objectives.tsx` | `template-parts/objectives.php` |
| `KeyFeatures.tsx` | `template-parts/key-features.php` |
| `DomainKnowledge.tsx` | `template-parts/domain-knowledge.php` |
| `TeamSection.tsx` | `template-parts/team.php` |
| `OutputsSection.tsx` | `template-parts/outputs.php` |
| `InfrastructureEcosystem.tsx` | `template-parts/infrastructure.php` |
| `CallToAction.tsx` | `template-parts/call-to-action.php` |

**Conversion approach for each:** Take the JSX output, convert it to plain HTML (replace `className` → `class`, remove JS logic, inline the static data), and wrap in PHP.

### 4. Build `front-page.php`

```php
<?php get_header(); ?>
<?php get_template_part('template-parts/hero'); ?>
<?php get_template_part('template-parts/tldr'); ?>
<?php get_template_part('template-parts/project-context'); ?>
<!-- ... all other sections ... -->
<?php get_template_part('template-parts/call-to-action'); ?>
<?php get_footer(); ?>
```

### 5. Handle Interactive Elements

- **Smooth scroll navigation** — Convert to vanilla JS in an enqueued script file
- **Mobile menu toggle** — Rewrite with vanilla JS (add/remove a CSS class)
- **Animated backgrounds** (NeuralNetwork, MatrixRain, TronGrid) — These use canvas/CSS animations. Copy the animation CSS from `index.css` and convert any canvas logic to a standalone JS file

### 6. Assets

- Copy `src/assets/*.png`, `*.jpg` into the theme's `assets/` folder
- Update image paths in PHP partials to use `<?php echo get_template_directory_uri(); ?>/assets/...`
- Copy `favicon.ico` and handle via `functions.php`

### 7. What You Lose

- Hot reload and live preview (standard for WP development)
- React state management (replaced by vanilla JS)
- Vite bundling (replaced by WordPress enqueue system)

### Summary

The core work is mechanical: extract the HTML structure from each React component's JSX, convert to PHP template parts, compile Tailwind to a static CSS file, and rewrite the small amount of interactivity (mobile menu, smooth scroll) in vanilla JavaScript.

