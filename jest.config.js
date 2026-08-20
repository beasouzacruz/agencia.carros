import nextJest from 'next/jest.js';

const createJestconfig = nextJest({
  dir: './',
});

const config = {
  clearMocks: true,
  testEnvironment:'node',
};
export default createJestconfig(config);