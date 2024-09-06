import { paraglide } from '@inlang/paraglide-sveltekit/vite'
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [paraglide({ project: './i18n.inlang', outdir: './src/lib/paraglide' }),sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
