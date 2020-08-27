module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/(*.)(spec|test).ts?(x)',
    '**/src/(*.)(spec|test).ts?(x)'
  ],
};