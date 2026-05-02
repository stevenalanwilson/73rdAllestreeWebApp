module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@73rd/tokens$': '<rootDir>/../tokens/src/index.ts',
  },
}
