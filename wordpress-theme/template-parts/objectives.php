<!-- Objectives -->
<section class="py-20 bg-gray-50/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Core Objectives</h2>
            <p class="text-xl text-gray-500 max-w-3xl mx-auto">Building the foundation for trustworthy, efficient, and reproducible AI-assisted physics research</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <?php
            $objectives = array(
                array('icon' => '🔄', 'title' => 'Reproducible Science Through Automation', 'desc' => 'Our agentic LLMs orchestrate reproducible research workflows using REANA and similar frameworks. These AI assistants automate complex multi-step experiments while maintaining full transparency and traceability, ensuring every result can be independently verified.'),
                array('icon' => '🗄️', 'title' => 'Domain-Oriented Knowledge Integration', 'desc' => 'Grounded in structured, domain-specific knowledge bases from physics literature, theory, experimental data, and best practices. Our AI provides physics-informed guidance across particle physics, materials science, astrophysics, and quantum systems.'),
                array('icon' => '⚡', 'title' => 'Optimized Code Generation', 'desc' => 'Generate scientifically sound code that is computationally efficient and energy-conscious. Our systems select appropriate algorithms, leverage GPU acceleration, minimize energy consumption, and balance numerical accuracy with computational cost.'),
                array('icon' => '🔒', 'title' => 'FAIR Principles as Foundation', 'desc' => 'Architected to support FAIR science from day one. AI-assisted metadata generation, standardized formats, clear documentation, ontologies for interoperability, and structured workflows enable findable, accessible, and reusable research.'),
            );
            foreach ($objectives as $obj) : ?>
            <div class="group hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 bg-white rounded-xl" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.1);">
                <div class="p-8">
                    <div class="flex items-start gap-4">
                        <div class="bg-teal-500/10 p-3 rounded-xl group-hover:bg-teal-500/20 transition-colors">
                            <span class="text-3xl"><?php echo $obj['icon']; ?></span>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-teal-500 transition-colors"><?php echo esc_html($obj['title']); ?></h3>
                            <p class="text-gray-500 leading-relaxed"><?php echo esc_html($obj['desc']); ?></p>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
