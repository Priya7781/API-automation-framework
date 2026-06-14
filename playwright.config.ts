import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/api',

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://conduit-api.bondaracademy.com'
  }
});