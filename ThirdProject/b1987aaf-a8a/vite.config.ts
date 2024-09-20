import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@components': path.resolve(__dirname, './src/components'),
			'@UI': path.resolve(__dirname, './src/UI'),
		},
	},
	plugins: [react()],
});
