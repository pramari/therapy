<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Therapy for AI Certificate</title>
	<meta name="description" content="Registration is required to enroll in the Therapy for Artificial Intelligence Certificate program." />
	<style>
		body {
			background-color: #0f172a;
			color: #f1f5f9;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			min-h-screen: 100vh;
		}
	</style>
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-screen p-6 text-center max-w-lg mx-auto">
	<h1 class="text-3xl font-bold tracking-tight mb-4">Therapy for Artificial Intelligence Certificate</h1>
	
	<p class="text-slate-400 mb-8 leading-relaxed">
		Registration is required to take the Therapy for Artificial Intelligence Certificate.
	</p>
	
	<a 
		href="{base}/demo/better-auth" 
		class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors"
	>
		Sign Up / Log In with pramari.de
	</a>
</div>
