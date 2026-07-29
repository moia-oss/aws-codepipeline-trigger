module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@actions/core$': '<rootDir>/test/stubs/actions-core.ts',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
