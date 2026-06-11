import "../src/tokens.css";
import "../src/components/md-button.css";

/** @type {import('@storybook/web-components-vite').Preview} */
export default {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};
