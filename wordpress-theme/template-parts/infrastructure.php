<!-- Infrastructure Ecosystem -->
<section id="resources" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Research Infrastructure Ecosystem</h2>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
            <p class="text-lg text-gray-500 leading-relaxed text-center">
                PhysicsLLM is funded through the ErUM-Data Plan of Action, a BMFTR initiative
                advancing digital transformation across ~20,000 scientists in German fundamental
                physics research. Our agentic workflows integrate with the PUNCH4NFDI Science Data
                Platform, leveraging federated compute and storage infrastructures spanning DESY,
                KIT, FZJ, LMU, GSI, and partner institutions.
            </p>
        </div>

        <!-- Logo strip -->
        <div class="flex flex-wrap items-center justify-center gap-8 mb-16">
            <a href="https://erumdatahub.de" target="_blank" rel="noopener noreferrer" class="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/erum-data-hub-logo.png" alt="ErUM-Data-Hub" class="h-12 w-auto object-contain">
            </a>
            <a href="https://www.punch4nfdi.de" target="_blank" rel="noopener noreferrer" class="bg-gray-100 rounded-lg px-5 py-3 text-gray-900 font-semibold text-sm hover:shadow-lg transition-shadow border border-gray-200/50">
                PUNCH4NFDI
            </a>
            <a href="https://www.bmftr.bund.de" target="_blank" rel="noopener noreferrer" class="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/bmbf-logo.png" alt="BMFTR" class="h-12 w-auto object-contain">
            </a>
            <a href="https://www.aip.de" target="_blank" rel="noopener noreferrer" class="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aip-logo.jpg" alt="AIP" class="h-12 w-auto object-contain">
            </a>
        </div>

        <!-- Info columns -->
        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <?php
            $infoCols = array(
                array('title' => 'ErUM Communities', 'text' => '8 physics research areas united in digital transformation across ~20,000 scientists in German fundamental physics.'),
                array('title' => 'PUNCH4NFDI', 'text' => '9,000+ PhD physicists, 30+ institutions, DFG-funded consortium for particles, universe, nuclei, and hadrons.'),
                array('title' => 'Infrastructure', 'text' => 'Federated compute and storage across DESY, KIT, FZJ, LMU, GSI, and partner institutions.'),
            );
            foreach ($infoCols as $col) : ?>
            <div class="border border-gray-200/50 bg-white rounded-xl">
                <div class="p-6 text-center">
                    <h3 class="text-lg font-bold text-gray-900 mb-2"><?php echo esc_html($col['title']); ?></h3>
                    <p class="text-sm text-gray-500"><?php echo esc_html($col['text']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
