<!-- Agentic Capabilities -->
<section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">What Our Agentic Assistants Do</h2>
            <p class="text-xl text-gray-500 max-w-3xl mx-auto">End-to-end support for the complete research lifecycle</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <?php
            $capabilities = array(
                array('icon' => '💡', 'title' => 'Assist Researchers in Hypothesis Development', 'desc' => 'Query domain knowledge bases and synthesize physics literature to identify research gaps and formulate testable hypotheses grounded in established science.'),
                array('icon' => '🧪', 'title' => 'Design Reproducible Experiments', 'desc' => 'Translate high-level physics goals into detailed, reproducible protocols suitable for REANA workflow systems, automating the translation from concept to executable pipeline.'),
                array('icon' => '💻', 'title' => 'Generate Optimized Code', 'desc' => 'Create production-quality code integrating physics correctness with computational efficiency, energy awareness, and industry best practices.'),
                array('icon' => '🔄', 'title' => 'Orchestrate Complex Workflows', 'desc' => 'Manage multi-stage simulations, data processing, and analysis across distributed resources while maintaining full reproducibility and transparency.'),
                array('icon' => '📊', 'title' => 'Analyze Results with Physics Understanding', 'desc' => 'Interpret experimental outcomes in light of physics principles, identifying surprising phenomena and guiding further investigation beyond statistical analysis.'),
                array('icon' => '📖', 'title' => 'Document and Share Discoveries', 'desc' => 'Generate publication-ready documentation, structured data repositories, and reproducible analysis packages enabling community verification and reuse.'),
            );
            foreach ($capabilities as $cap) : ?>
            <div class="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 bg-white rounded-xl">
                <div class="p-6">
                    <div class="mb-4 bg-teal-500/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                        <span class="text-2xl"><?php echo $cap['icon']; ?></span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900"><?php echo esc_html($cap['title']); ?></h3>
                    <p class="text-gray-500 text-sm leading-relaxed"><?php echo esc_html($cap['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
