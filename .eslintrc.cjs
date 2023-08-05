module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier', 'react', 'import'],
  rules: {
    'no-restricted-exports': 0,
    'no-console': 0,
    'no-trailing-spaces': 2,
    'import/prefer-default-export': [
      (0),
    ],
    'import/no-extraneous-dependencies': [2, { 'devDependencies': true }],
    'import/extensions': [
      2,
      {
      ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        }
    }],
    'react-refresh/only-export-components': [
      1,
      { allowConstantExport: true },
    ],
    'react/no-unknown-property': [2, { ignore: ['css'] }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    '@typescript-eslint/no-empty-function': 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    'prettier/prettier': 2,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      alias: {
        map: [
          ['api', './src/api'],
          ['assets', './src/assets'],
          ['components', './src/components'],
        ],
        extentions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }
  },
}
