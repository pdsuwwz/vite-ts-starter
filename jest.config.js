module.exports = {
  testEnvironment: 'node',

  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  testMatch: ['<rootDir>/__tests__/**/*.spec.js'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.js$': '@sucrase/jest-plugin',
    '^.+\\.(vue)$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },

  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  coverageProvider: 'v8',
  collectCoverageFrom: [
    // 'src/**/*.vue',
    'src/modules/**/components/*.vue',
    'src/components/**/*.vue'
    // 'src/widgets/**/*.vue'
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 80,
      lines: 90,
      statements: 80
    }
  }
}
