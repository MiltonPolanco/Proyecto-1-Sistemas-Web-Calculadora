import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // reglas recomendadas de ESLint core
      ...js.configs.recommended.rules,

      // reglas de React Hooks
      ...reactHooks.configs.recommended.rules,

      // prohíbe punto y coma
      'semi': ['error', 'never'],

      // detectar puntos y comas extra
      'no-extra-semi': 'error',

      // mantiene tu regla de no-unused-vars pero ignora constantes PascalCase
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // mantiene tu regla para react-refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
