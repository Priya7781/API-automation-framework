import { defineConfig } from '@playwright/test';
import 'dotenv/config';

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
