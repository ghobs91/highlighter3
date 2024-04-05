import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['bytemd']
	},
	kit: {
		adapter: adapter({
			// see below for options that can be set here
		})
	}
};

export default config;
