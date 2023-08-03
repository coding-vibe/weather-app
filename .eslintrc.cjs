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
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'no-console': 0,
    'no-trailing-spaces': 2,
    'import/prefer-default-export': [
      (0),
    ],
    'react-refresh/only-export-components': [
      1,
      { allowConstantExport: true },
    ],
    'import/no-extraneous-dependencies': [2, {'devDependencies': true}],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    '@typescript-eslint/no-empty-function': 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    'prettier/prettier': 2,
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
