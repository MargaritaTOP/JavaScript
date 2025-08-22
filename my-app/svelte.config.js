import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: null
		}),
		alias: {
			'$lib': 'src/lib',
			'$lib/*': 'src/lib/*',
			'$types': '.svelte-kit/types',
			'$types/*': '.svelte-kit/types/*'
		}
	},
	preprocess: vitePreprocess()
};

export default config;