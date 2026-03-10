<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PhysicsLLM Agentic Workflows — Autonomous AI systems for physics research automation. LLM-based agents for data curation, metadata annotation, and reproducible science.">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Navbar -->
<nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50" id="site-navbar">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="https://physics-llm.erumdatahub.de/" target="_blank" rel="noopener noreferrer"
           class="text-xl font-bold text-gray-900 hover:text-teal-500 transition-colors">
            PhysicsLLM
        </a>

        <!-- Desktop -->
        <div class="hidden md:flex items-center gap-6">
            <a href="#overview" class="nav-scroll text-sm text-gray-500 hover:text-gray-900 transition-colors">Overview</a>
            <a href="#team" class="nav-scroll text-sm text-gray-500 hover:text-gray-900 transition-colors">Team</a>
            <a href="#outputs" class="nav-scroll text-sm text-gray-500 hover:text-gray-900 transition-colors">Outputs</a>
            <a href="#resources" class="nav-scroll text-sm text-gray-500 hover:text-gray-900 transition-colors">Resources</a>
            <a href="#contact" class="nav-scroll text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
            <a href="#contact" class="nav-scroll inline-flex items-center justify-center rounded-md text-sm font-medium bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                Join Collaboration
            </a>
        </div>

        <!-- Mobile toggle -->
        <button class="md:hidden text-gray-900" id="mobile-menu-toggle" aria-label="Toggle menu">
            <svg class="h-6 w-6" id="menu-icon-open" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg class="h-6 w-6 hidden" id="menu-icon-close" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden hidden bg-white border-b border-gray-200/50 px-4 pb-4 space-y-2" id="mobile-menu">
        <a href="#overview" class="nav-scroll block w-full text-left py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">Overview</a>
        <a href="#team" class="nav-scroll block w-full text-left py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">Team</a>
        <a href="#outputs" class="nav-scroll block w-full text-left py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">Outputs</a>
        <a href="#resources" class="nav-scroll block w-full text-left py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">Resources</a>
        <a href="#contact" class="nav-scroll block w-full text-left py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
        <a href="#contact" class="nav-scroll block w-full text-center rounded-md text-sm font-medium bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
            Join Collaboration
        </a>
    </div>
</nav>
