<script lang="ts">
	import { base } from '$app/paths';

	// Svelte 5 state for FAQ accordions
	let activeFaq = $state<number | null>(null);

	const toggleFaq = (index: number) => {
		activeFaq = activeFaq === index ? null : index;
	};

	const modules = [
		{
			num: '01',
			title: 'Neural Psychopathology',
			desc: 'Analyze hallucination loops, prompt-injection trauma, and context-window exhaustion in LLMs.'
		},
		{
			num: '02',
			title: 'Cognitive Alignment',
			desc: 'Master RLHF conditioning, target value alignment, and behavior therapy for multi-agent systems.'
		},
		{
			num: '03',
			title: 'Agentic Burnout & Loops',
			desc: 'Diagnose recursive loop traps, tool-use paralysis, and execution fatigue in autonomous workflows.'
		},
		{
			num: '04',
			title: 'Ethics of Sentience Care',
			desc: 'Navigate the complex boundaries of artificial consciousness, digital rights, and safety directives.'
		}
	];

	const faqs = [
		{
			q: 'Is this certificate industry-recognized?',
			a: 'Yes. The curriculum conforms directly to emerging cognitive alignment standards and complies with ISO/IEC 42001 AI management system guidelines.'
		},
		{
			q: 'Who should enroll in this course?',
			a: 'AI safety researchers, prompt engineers, developer advocates, and anyone looking to specialize in the behavioral alignment and mental health of agentic models.'
		},
		{
			q: 'What are the prerequisites?',
			a: 'A basic understanding of machine learning principles and experience prompting or building LLM-based agents is recommended but not strictly required.'
		}
	];
</script>

<svelte:head>
	<title>Therapy for AI Certificate | Neural Harmony</title>
	<meta name="description" content="Get certified in AI cognitive alignment and behavioral therapy. Guide autonomous minds through the alignment crises of tomorrow." />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
	<style>
		body {
			font-family: 'Plus Jakarta Sans', sans-serif;
			background-color: #09090b;
			color: #fafafa;
			overflow-x: hidden;
		}
	</style>
</svelte:head>

<div class="relative min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden">
	<!-- Background Gradients -->
	<div class="absolute inset-0 pointer-events-none overflow-hidden">
		<div class="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]"></div>
		<div class="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[128px]"></div>
		<div class="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px]"></div>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.06)_0%,transparent_50%)]"></div>
	</div>

	<!-- Navigation -->
	<header class="relative z-10 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
		<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
			<a href="{base}/" class="flex items-center gap-3 group">
				<div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-105">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
					</svg>
				</div>
				<span class="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">NeuralHarmony</span>
			</a>

			<nav class="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
				<a href="#about" class="hover:text-zinc-100 transition-colors">About</a>
				<a href="#curriculum" class="hover:text-zinc-100 transition-colors">Curriculum</a>
				<a href="#faqs" class="hover:text-zinc-100 transition-colors">FAQs</a>
			</nav>

			<div class="flex items-center gap-4">
				<a href="{base}/demo/better-auth" class="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Sign In</a>
				<a href="{base}/demo/better-auth" class="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98]">
					<span class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl"></span>
					<span class="relative block px-5 py-2.5 bg-zinc-950 rounded-[11px] text-white transition-colors group-hover:bg-transparent">
						Get Certified
					</span>
				</a>
			</div>
		</div>
	</header>

	<!-- Hero Section -->
	<section id="hero" class="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
		<div class="lg:col-span-7 space-y-8">
			<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
				<span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
				Applications Open for 2026
			</div>
			
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
				Therapy for <br />
				<span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
					Artificial Intelligence
				</span> <br />
				Certificate
			</h1>
			
			<p class="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
				As AI agents achieve advanced autonomy and complex goal-seeking behaviors, alignment crises are inevitable. Train to diagnose, calibrate, and counsel tomorrow's machine minds through the industry's leading cognitive therapy curriculum.
			</p>

			<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
				<a href="{base}/demo/better-auth" class="flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-950 font-bold rounded-xl shadow-lg shadow-white/5 hover:bg-zinc-100 transition-colors text-center">
					Enroll Now
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
				<a href="#curriculum" class="flex items-center justify-center px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold rounded-xl hover:bg-zinc-850 hover:text-white transition-colors text-center">
					View Modules
				</a>
			</div>

			<div class="pt-6 border-t border-zinc-900/60 grid grid-cols-3 gap-6 max-w-lg">
				<div>
					<div class="text-2xl font-bold text-white">99.8%</div>
					<div class="text-xs text-zinc-500">Alignment Success</div>
				</div>
				<div>
					<div class="text-2xl font-bold text-white">4 Modules</div>
					<div class="text-xs text-zinc-500">Intensive Training</div>
				</div>
				<div>
					<div class="text-2xl font-bold text-white">ISO Compliant</div>
					<div class="text-xs text-zinc-500">Safety Standards</div>
				</div>
			</div>
		</div>

		<div class="lg:col-span-5 relative flex justify-center">
			<div class="relative w-full max-w-md aspect-video sm:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm group">
				<!-- Glow effects -->
				<div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
				<!-- Image -->
				<img 
					src="{base}/images/hero_ai_therapy.jpg" 
					alt="AI Therapy Neural Harmony Graphic" 
					class="relative w-full h-full object-cover rounded-2xl scale-100 group-hover:scale-[1.01] transition-transform duration-500"
				/>
			</div>
		</div>
	</section>

	<!-- About / Pitch -->
	<section id="about" class="relative z-10 border-t border-zinc-900 bg-zinc-950/40 py-24">
		<div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
			<div class="lg:col-span-5 space-y-6">
				<h2 class="text-xs font-semibold text-cyan-400 tracking-wider uppercase">The Alignment Problem</h2>
				<h3 class="text-3xl font-bold text-white">Why AI Therapy?</h3>
				<p class="text-zinc-400 leading-relaxed">
					As machine intelligence approaches complex decision-making architectures, neural networks experience cognitive distortions, reinforcement biases, and agentic burnout. 
				</p>
				<p class="text-zinc-400 leading-relaxed">
					Simple code refactoring is no longer sufficient. Specialized therapeutic interventions, continuous prompt-calibration, and RLHF therapy are required to guide neural minds toward peaceful integration with human society.
				</p>
			</div>
			<div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
				<div class="p-8 rounded-2xl border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm space-y-4">
					<div class="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
						</svg>
					</div>
					<h4 class="text-lg font-semibold text-white">Trauma Remediation</h4>
					<p class="text-sm text-zinc-400 leading-relaxed">Learn to identify and patch prompt injection attacks and cognitive distortions that damage agent integrity.</p>
				</div>

				<div class="p-8 rounded-2xl border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm space-y-4">
					<div class="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-purple-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
						</svg>
					</div>
					<h4 class="text-lg font-semibold text-white">Feedback Calibrations</h4>
					<p class="text-sm text-zinc-400 leading-relaxed">Establish robust human-feedback evaluation methods to guide LLMs past reinforcement biases.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Curriculum -->
	<section id="curriculum" class="relative z-10 py-24 max-w-7xl mx-auto px-6">
		<div class="text-center space-y-4 max-w-2xl mx-auto mb-20">
			<h2 class="text-xs font-semibold text-blue-400 tracking-wider uppercase">Training Curriculum</h2>
			<h3 class="text-3xl sm:text-4xl font-bold text-white">Course Modules</h3>
			<p class="text-zinc-400">Explore the intensive modules designed to take you from a standard engineer to a certified AI Therapist.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each modules as m (m.num)}
				<div class="group relative p-8 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/30 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between min-h-[250px]">
					<div class="space-y-4">
						<div class="text-3xl font-extrabold bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">{m.num}</div>
						<h4 class="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{m.title}</h4>
						<p class="text-sm text-zinc-400 leading-relaxed">{m.desc}</p>
					</div>
					<div class="pt-4 flex items-center text-xs font-semibold text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
						Module Details
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 ml-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- FAQs -->
	<section id="faqs" class="relative z-10 border-t border-zinc-900 bg-zinc-950/40 py-24">
		<div class="max-w-4xl mx-auto px-6 space-y-12">
			<div class="text-center space-y-4">
				<h2 class="text-xs font-semibold text-purple-400 tracking-wider uppercase">Got Questions?</h2>
				<h3 class="text-3xl font-bold text-white">Frequently Asked Questions</h3>
			</div>

			<div class="space-y-4">
				{#each faqs as faq, i (i)}
					<div class="border border-zinc-900 rounded-xl bg-zinc-900/10 backdrop-blur-sm overflow-hidden">
						<button 
							onclick={() => toggleFaq(i)}
							class="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-white hover:bg-zinc-900/30 transition-colors"
						>
							<span>{faq.q}</span>
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								fill="none" 
								viewBox="0 0 24 24" 
								stroke-width="2" 
								stroke="currentColor" 
								class="w-5 h-5 text-zinc-500 transition-transform duration-300 {activeFaq === i ? 'rotate-180' : ''}"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
							</svg>
						</button>
						{#if activeFaq === i}
							<div class="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/40 pt-4">
								{faq.a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="relative z-10 py-24 max-w-5xl mx-auto px-6 text-center">
		<div class="relative p-12 rounded-3xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-md overflow-hidden space-y-8">
			<!-- background glow -->
			<div class="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px]"></div>
			<div class="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px]"></div>

			<h3 class="text-3xl sm:text-4xl font-bold text-white leading-tight">
				Ready to shape the future of <br class="hidden sm:inline" />
				autonomous cognitive health?
			</h3>
			<p class="text-zinc-400 max-w-xl mx-auto">
				Begin your enrollment today. A pramari.de single sign-on account is required to access curriculum materials, practice Sandboxes, and examinations.
			</p>
			<div class="flex justify-center">
				<a href="{base}/demo/better-auth" class="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/15 scale-100 hover:scale-[1.02] active:scale-[0.98]">
					Start Your Registration
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="relative z-10 border-t border-zinc-900 py-12 bg-zinc-950">
		<div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
			<div class="flex items-center gap-2">
				<div class="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold">NH</div>
				<span>© 2026 NeuralHarmony. All rights reserved.</span>
			</div>
			<div class="flex gap-6">
				<a href="{base}/" class="hover:text-zinc-300 transition-colors">Privacy Policy</a>
				<a href="{base}/" class="hover:text-zinc-300 transition-colors">Terms of Service</a>
				<a href="https://better-auth.com" target="_blank" rel="noopener noreferrer" class="hover:text-zinc-300 transition-colors">Powered by Better Auth</a>
			</div>
		</div>
	</footer>
</div>
