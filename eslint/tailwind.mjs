import tailwindPlugin from 'eslint-plugin-tailwindcss';

export default {
  plugins: {
    tailwindcss: tailwindPlugin,
  },
  rules: {
    ...tailwindPlugin.configs.recommended.rules,
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off',
  },
};
