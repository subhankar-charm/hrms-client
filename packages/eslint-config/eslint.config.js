import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import pluginNext from '@next/eslint-plugin-next';

/**
 * A shared ESLint configuration for the repository.
 * @type {import("eslint").Linter.Config}
 */
const baseConfig = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': pluginNext
    }
  },
  {
    ignores: ['dist/**']
  },
  {
    rules: {
      'no-console': 'warn',
      'no-multi-spaces': ['error', { exceptions: { Property: false } }]
    }
  }
];

export default baseConfig;
