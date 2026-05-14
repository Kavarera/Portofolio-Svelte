<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	/** @type {HTMLCanvasElement} */
	let canvas;
	/** @type {CanvasRenderingContext2D | null} */
	let ctx;
	/** @type {number[]} */
	let drops = [];
	/** @type {number} */
	let rafId;

	function resize() {
		if (!canvas) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		// Re-init drops after resize to prevent column count mismatch (bug fix)
		const columns = Math.floor(canvas.width / 20);
		drops = Array(columns).fill(0);
	}

	function animate() {
		if (!ctx || !canvas) return;
		ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#00ffff';
		ctx.font = '15px monospace';

		for (let i = 0; i < drops.length; i++) {
			const text = String.fromCharCode(Math.random() * 128);
			ctx.fillText(text, i * 20, drops[i] * 20);

			if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
				drops[i] = 0;
			}
			drops[i]++;
		}

		rafId = requestAnimationFrame(animate);
	}

	onMount(() => {
		if (!browser) return;
		ctx = canvas.getContext('2d');
		resize();
		animate();
		window.addEventListener('resize', resize);
	});

	onDestroy(() => {
		if (browser) {
			cancelAnimationFrame(rafId);
			window.removeEventListener('resize', resize);
		}
	});
</script>

{#if browser}
	<canvas bind:this={canvas}></canvas>
{/if}

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -2;
		opacity: 0.1;
		pointer-events: none;
	}
</style>
