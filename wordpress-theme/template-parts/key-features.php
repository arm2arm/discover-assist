<!-- Key Features -->
<section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Key Features</h2>
            <p class="text-xl text-gray-500 max-w-3xl mx-auto">Advancing physics research through trustworthy AI collaboration</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <?php
            $features = array(
                array(
                    'icon' => '🛡️',
                    'title' => 'Reproducibility and Transparency',
                    'items' => array(
                        'Automatic generation of machine-readable workflow specifications',
                        'Comprehensive recording of all computational parameters',
                        'Code traceability with documentation and version tracking',
                        'Energy and compute logging for sustainability assessment',
                        'Complete provenance recording from raw data to final results',
                    )
                ),
                array(
                    'icon' => '⚡',
                    'title' => 'Compute Efficiency and Energy Consciousness',
                    'items' => array(
                        'Intelligent algorithm selection balancing accuracy and cost',
                        'Resource-aware execution matching tasks to available hardware',
                        'Energy profiling and optimization opportunity identification',
                        'Sustainable practices avoiding redundant computation',
                        'Scalability guidance for parallelization and distribution',
                    )
                ),
                array(
                    'icon' => '👥',
                    'title' => 'Collaborative Intelligence',
                    'items' => array(
                        'Handling computational routine and documentation burden',
                        'Rapid exploration of design spaces and parameter variations',
                        'Synthesizing information across vast literature',
                        'Suggesting optimizations and efficiency improvements',
                        'Researchers retain full agency and creative direction',
                    )
                ),
            );
            foreach ($features as $feature) : ?>
            <div class="group hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 bg-white rounded-xl" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.1);">
                <div class="p-8">
                    <div class="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" style="background: linear-gradient(to bottom right, hsl(165,60%,55%,0.2), hsl(205,70%,28%,0.2));">
                        <span class="text-3xl"><?php echo $feature['icon']; ?></span>
                    </div>
                    <h3 class="text-2xl font-bold mb-6 text-gray-900"><?php echo esc_html($feature['title']); ?></h3>
                    <ul class="space-y-3">
                        <?php foreach ($feature['items'] as $item) : ?>
                        <li class="text-sm text-gray-500 flex items-start gap-2">
                            <span class="text-teal-500 mt-1 flex-shrink-0">✓</span>
                            <span><?php echo esc_html($item); ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
