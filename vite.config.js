import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({mode}) => {
	return {
		plugins: [sveltekit()],

		resolve: {
			alias: {
				$fonts: (mode == "production") ? resolve('./static/fonts') : "/fonts"
			}
		},

		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		} 

	};
});
