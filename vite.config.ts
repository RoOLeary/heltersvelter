import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'build', // Set your custom build directory here
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
