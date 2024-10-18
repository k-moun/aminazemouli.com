import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        projects: 'projects.html',
        about: 'about.html',
        contact: 'contact.html',
        blog: 'blog.html',
      }
    }
  }
});