// @ts-nocheck
// Import necessary testing libraries
import '@testing-library/jest-dom'; // for extending jest matchers
import { server } from './mocks/server'; // if you are using MSW (Mock Service Worker) for API mocking
import { act } from 'react-dom/test-utils';

// Suppress console errors during tests
console.error = () => {};

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen(); // start the mock server if you're using MSW
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => {
  server.close(); // close the mock server after all tests are finished
});
