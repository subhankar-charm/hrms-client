const config = {
  'apps/**/*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  'packages/**/*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.json': ['prettier --write']
};

export default config;
