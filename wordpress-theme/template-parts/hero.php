<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, hsl(165,60%,55%) 0%, hsl(185,60%,45%) 50%, hsl(205,70%,28%) 100%);">
    <!-- Neural Network Canvas -->
    <canvas id="neural-canvas" class="absolute inset-0 w-full h-full pointer-events-none" style="opacity: 0.6;"></canvas>

    <!-- Floating AI badges -->
    <div class="absolute inset-0 pointer-events-none z-10">
        <div class="absolute top-20 left-10" style="animation: float 6s ease-in-out infinite;">
            <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.2);">
                <span class="text-white font-semibold text-sm">🧠 AI Agents</span>
            </div>
        </div>
        <div class="absolute top-32 right-16" style="animation: float 7s ease-in-out infinite 1s;">
            <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.2);">
                <span class="text-white font-semibold text-sm">🔗 Neural Networks</span>
            </div>
        </div>
        <div class="absolute bottom-32 left-20" style="animation: float 8s ease-in-out infinite 2s;">
            <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.2);">
                <span class="text-white font-semibold text-sm">⚡ LLM Powered</span>
            </div>
        </div>
        <div class="absolute bottom-24 right-24" style="animation: float 6.5s ease-in-out infinite 1.5s;">
            <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.2);">
                <span class="text-white font-semibold text-sm">✨ ML Research</span>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-5xl mx-auto text-center space-y-8">
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border-2 border-white/40 rounded-full px-8 py-4 animate-pulse" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.2);">
                <span class="text-white font-bold text-lg tracking-wider">
                    AGENTIC AI · POWERED BY LLM
                </span>
            </div>

            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span class="inline-block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent" style="animation: shimmer 3s ease-in-out infinite; background-size: 200% auto;">
                    Agentic Workflows
                </span>
                <br>
                <span class="text-white/95 text-3xl sm:text-4xl lg:text-5xl mt-2 inline-block">
                    Building Autonomous AI Systems for
                </span>
                <br>
                <span class="inline-block mt-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent" style="animation: shimmer 3s ease-in-out infinite 1s; background-size: 200% auto;">
                    Physics Research Automation
                </span>
            </h1>

            <p class="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                Developing LLM-based agentic frameworks that orchestrate complex research
                workflows—from data analysis to publication-ready results. Leveraging large language
                models and agentic AI to transform Big Data into Smart Data.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a href="#outputs" class="nav-scroll inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-[hsl(205,70%,28%)] px-6 py-3 hover:bg-white/90 hover:scale-105 transition-all duration-300 group" style="box-shadow: 0 10px 40px hsl(165,60%,55%,0.2);">
                    Explore Our Tools
                    <span class="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
                <a href="#resources" class="nav-scroll inline-flex items-center justify-center rounded-md text-sm font-medium border-2 border-white text-white px-6 py-3 hover:bg-white/10 backdrop-blur-sm transition-colors">
                    📄 Read Documentation
                </a>
            </div>
        </div>
    </div>
</section>
