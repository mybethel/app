module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/(coverage|tests)/**',
    '!**/*.config.js'
  ],
  coverageReporters: ['html', 'lcovonly', 'text-summary'],
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['./tests/jest.setup.js'],
  transform: {
    '^.+\\.gql$': 'jest-raw-loader'
  },
  transformIgnorePatterns: ['node_modules/(?!vuetify/lib/)'],
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/*.spec.js']
}
