module.exports = {
  moduleFileExtensions: ['js', 'ts', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^_assets/(.*)$': '<rootDir>/src/assets/$1',
    '^_components/(.*)$': '<rootDir>/src/components/$1',
    '^_hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^_theme/(.*)$': '<rootDir>/src/theme/$1',
    '^_utils/(.*)$': '<rootDir>/src/utils/$1',
    '^_views/(.*)$': '<rootDir>/src/views/$1',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-tests.ts',
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '\\.(js|jsx|ts)?$': 'ts-jest',
  },
};
