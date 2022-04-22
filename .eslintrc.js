module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'no-undef': 1,
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',
    // https://cn.eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 2, // 禁用行尾空白
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'no-irregular-whitespace': 2,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    // https://cn.eslint.org/docs/rules/eol-last
    'eol-last': 2,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 2,
    camelcase: ['error', { properties: 'never' }],
    indent: ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        }
      }
    ],
    '@typescript-eslint/no-empty-function': 0,
    // semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    // vue
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-unused-components': 1,
    'vue/no-mutating-props': 0,
    'vue/script-setup-uses-vars': 'error',
    // https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
    'vue/v-on-event-hyphenation': ['warn', 'always', {
      autofix: true
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }]
  },
  // https://github.com/vuejs/eslint-plugin-vue/issues/1355
  'overrides': [
    {
      'files': ['*.html'],
      'processor': 'vue/.vue'
    }
  ]
}
