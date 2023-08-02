module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'airbnb',
    'airbnb/hooks',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/prefer-default-export': [
      ('off'),
      { target: 'single' },
    ],
    'no-console': 'off',
    'no-trailing-spaces': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts'] }],
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    "@typescript-eslint/no-non-null-assertion": 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['assets', './src/assets'],
          ['components', './src/components'],
        ],
        extentions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }
  },
}
