/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.spec.ts',
    '!src/app/app.config.ts',
    '!src/app/core/models/**',
    '!src/app/core/data/**',
    '!src/main.ts',
  ],
  coverageReporters: ['text', 'html', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 65,
      lines: 70,
    },
  },
  clearMocks: true,
};
