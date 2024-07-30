module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js'],
    moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleNameMapper: {
      '^@models/(.*)$': '<rootDir>/src/models/$1',
      '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
      '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    },
  };
  