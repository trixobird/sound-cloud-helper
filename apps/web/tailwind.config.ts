// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Config = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    fontFamily: {
      commissioner: 'commissioner',
    },
  },
};

export default config;
