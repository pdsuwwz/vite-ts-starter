module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    customExportConditions: [
      'node',
      'node-addons'
    ]
  },

  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|jpeg|jpg|gif)$': 'identity-obj-proxy',
    '\\.(ttf|woff|woff2)$': 'identity-obj-proxy',
    'iconfont\\.js$': 'identity-obj-proxy'
  },

  testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(js|ts)$': '@sucrase/jest-plugin',
    '^.+\\.(vue)$': '@vue/vue3-jest'
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
