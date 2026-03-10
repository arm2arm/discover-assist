<!-- Use Cases -->
<section class="py-20 bg-gray-50/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">What We're Building</h2>
            <p class="text-xl text-gray-500 max-w-3xl mx-auto">Concrete applications of agentic AI in fundamental physics research</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <?php
            $cases = array(
                array('icon' => '📖', 'title' => 'Autonomous Literature Review', 'desc' => 'Agents that search, summarize, and synthesize physics papers with citation management and metadata extraction across all ErUM communities.'),
                array('icon' => '🗄️', 'title' => 'FAIR Data Pipeline Orchestration', 'desc' => 'Multi-step workflows for processing, curating, and publishing research data with automated metadata generation following FAIR principles.'),
                array('icon' => '🔄', 'title' => 'Research Workflow Automation', 'desc' => 'End-to-end agents that coordinate data analysis, visualization, and documentation for reproducible science using REANA.'),
            );
            foreach ($cases as $case) : ?>
            <div class="group hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 bg-white rounded-xl" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.1);">
                <div class="p-8 text-center">
                    <div class="mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" style="background: linear-gradient(to bottom right, hsl(165,60%,55%,0.2), hsl(205,70%,28%,0.2));">
                        <span class="text-3xl"><?php echo $case['icon']; ?></span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900"><?php echo esc_html($case['title']); ?></h3>
                    <p class="text-sm text-gray-500 leading-relaxed"><?php echo esc_html($case['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
