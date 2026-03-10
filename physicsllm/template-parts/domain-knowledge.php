<!-- Domain Knowledge -->
<section class="py-20 bg-gray-50/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Domain-Oriented Knowledge Bases</h2>
            <p class="text-xl text-gray-500 max-w-3xl mx-auto">Specialized expertise across fundamental physics domains</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            <?php
            $domains = array(
                array('icon' => '⚛️', 'title' => 'High-Energy Physics', 'items' => array('Particle interactions', 'Detector simulations', 'Monte Carlo methods', 'Data analysis workflows')),
                array('icon' => '🔬', 'title' => 'Materials Science & Condensed Matter', 'items' => array('Crystal structures', 'Electronic properties', 'Simulation methods', 'Synthesis pathways')),
                array('icon' => '🔭', 'title' => 'Astrophysics & Cosmology', 'items' => array('Observational techniques', 'Data integration', 'Statistical inference', 'Cosmological modeling')),
                array('icon' => '🖥️', 'title' => 'Quantum Physics', 'items' => array('Quantum mechanics', 'Many-body systems', 'Quantum algorithms', 'Quantum computing workflows')),
            );
            foreach ($domains as $domain) : ?>
            <div class="group hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 bg-white rounded-xl" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.1);">
                <div class="p-6">
                    <div class="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" style="background: linear-gradient(to bottom right, hsl(165,60%,55%,0.2), hsl(205,70%,28%,0.2));">
                        <span class="text-3xl"><?php echo $domain['icon']; ?></span>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-900"><?php echo esc_html($domain['title']); ?></h3>
                    <ul class="space-y-2">
                        <?php foreach ($domain['items'] as $item) : ?>
                        <li class="text-sm text-gray-500 flex items-start gap-2">
                            <span class="text-teal-500 mt-1">•</span>
                            <?php echo esc_html($item); ?>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="border border-gray-200/50 rounded-xl" style="background: linear-gradient(to bottom right, hsl(165,60%,55%,0.05), hsl(205,70%,28%,0.05));">
                <div class="p-8">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900">Knowledge Base Integration</h3>
                    <ul class="grid sm:grid-cols-2 gap-4 text-gray-500">
                        <li class="flex items-start gap-2"><span class="text-teal-500 mt-1">✓</span><span>Curated physics literature and theoretical frameworks</span></li>
                        <li class="flex items-start gap-2"><span class="text-teal-500 mt-1">✓</span><span>Established computational methods and algorithms</span></li>
                        <li class="flex items-start gap-2"><span class="text-teal-500 mt-1">✓</span><span>Experimental protocols and instrumentation specs</span></li>
                        <li class="flex items-start gap-2"><span class="text-teal-500 mt-1">✓</span><span>Data formats and metadata standards</span></li>
                        <li class="flex items-start gap-2"><span class="text-teal-500 mt-1">✓</span><span>Energy efficiency and computational best practices</span></li>
                        <li class="flex items-start gap-2"><span class="text-teal-500 mt-1">✓</span><span>Community feedback and cutting-edge developments</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
