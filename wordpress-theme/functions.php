<?php
/**
 * PhysicsLLM Theme Functions
 */

// Enqueue styles and scripts
function physicsllm_enqueue_assets() {
    // Compiled Tailwind CSS
    wp_enqueue_style(
        'physicsllm-tailwind',
        get_template_directory_uri() . '/assets/css/tailwind.css',
        array(),
        '1.0.0'
    );

    // Custom CSS (animations, design tokens that Tailwind doesn't cover)
    wp_enqueue_style(
        'physicsllm-custom',
        get_template_directory_uri() . '/assets/css/custom.css',
        array('physicsllm-tailwind'),
        '1.0.0'
    );

    // Main JS (mobile menu, smooth scroll, neural network canvas)
    wp_enqueue_script(
        'physicsllm-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        '1.0.0',
        true
    );

    // Neural network canvas animation
    wp_enqueue_script(
        'physicsllm-neural',
        get_template_directory_uri() . '/assets/js/neural-network.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'physicsllm_enqueue_assets');

// Register navigation menus
function physicsllm_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'physicsllm'),
    ));
}
add_action('init', 'physicsllm_register_menus');

// Add theme support
function physicsllm_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'gallery', 'caption'));
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'physicsllm_setup');

// Add favicon
function physicsllm_favicon() {
    echo '<link rel="icon" href="' . get_template_directory_uri() . '/assets/images/favicon.ico" />';
}
add_action('wp_head', 'physicsllm_favicon');
