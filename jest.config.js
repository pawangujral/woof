module.exports = {
  moduleFileExtensions: ['js', 'tsx', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '_/*': ['*'],
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-tests.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '\\.(js|jsx|ts)?$': 'ts-jest',
  },
};
