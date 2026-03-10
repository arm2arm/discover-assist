/**
 * PhysicsLLM Theme - Main JavaScript
 * Handles: mobile menu toggle, smooth scroll navigation
 */

document.addEventListener('DOMContentLoaded', function () {
  // ── Mobile Menu Toggle ──
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden', !isOpen);
        iconClose.classList.toggle('hidden', isOpen);
      }
    });
  }

  // ── Smooth Scroll for .nav-scroll links ──
  document.querySelectorAll('.nav-scroll').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu if open
        if (menu && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
          if (iconOpen) iconOpen.classList.remove('hidden');
          if (iconClose) iconClose.classList.add('hidden');
        }
      }
    });
  });
});
