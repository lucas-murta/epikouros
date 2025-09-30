import type { Preview } from '@storybook/react';
import '../src/styles.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'light',
      list: [
        {
          name: 'light',
          class: '',
          color: '#ffffff',
        },
        {
          name: 'dark',
          class: '',
          color: '#333333',
        },
      ],
      target: 'root',
      attribute: 'data-theme',
    },
  },
};

export default preview;
