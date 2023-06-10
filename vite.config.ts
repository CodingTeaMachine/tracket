import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: 'tracket.local',
		port: 80
	},
	test: {
		include: ['src/tests/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$: resolve('./src'),
			$i18n: resolve('./src/lib/i18n'),
			$types: resolve('src/types')
		},
	},
});
