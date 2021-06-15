module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx|ts)?$': 'ts-jest',
  },
  // finds test
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^_components/(.*)$': '<rootDir>/src/components/$1',
    '^_hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^_theme/(.*)$': '<rootDir>/src/theme/$1',
    '^_utils/(.*)$': '<rootDir>/src/utils/$1',
    '^_views/(.*)$': '<rootDir>/src/views/$1',
    '^_assets/(.*)$': '<rootDir>/src/assets/$1',
  },
};
