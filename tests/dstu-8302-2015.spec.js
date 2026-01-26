/**
 * E2E tests for ДСТУ 8302:2015 citation formatting using Playwright
 * 
 * Tests verify that the citation server properly formats bibliography entries
 * according to ДСТУ 8302:2015 standard with exact formatting match
 * 
 * Organized by citation type for better structure and readability
 * 
 * UNKNOWN BUG: Genre label for books in English shows "monograph" instead of 
 * the Ukrainian "монографія". This affects English-language books but not Ukrainian ones.
 * Root cause unknown - macro logic appears correct but citeproc-js may have 
 * language handling issue. Requires further investigation.
 * See: test-cases/books.js for expected format vs actual output
 */

import { test, expect } from '@playwright/test';
import http from 'http';
import {
  BOOKS,
  JOURNAL_ARTICLES,
  CHAPTERS,
  THESES,
  PATENTS,
  STANDARDS,
  WEB_RESOURCES,
  CONFERENCE_PAPERS,
  USER_ARTICLES,
  SORTING
} from './test-cases/index.js';

// Helper function to make HTTP requests to the citation server
function makeRequest(body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 8085,
      path: '/?style=dstu-8302-2015&bibliography=1',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(body)),
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(JSON.stringify(body));
    req.end();
  });
}

// Helper to run test cases
function runTestCases(testCases) {
  for (const testCase of testCases) {
    test(testCase.name, async () => {
      const response = await makeRequest(testCase.data);

      // Verify response structure
      expect(response).toHaveProperty('bibliography');
      expect(Array.isArray(response.bibliography)).toBe(true);
      expect(response.bibliography.length).toBeGreaterThanOrEqual(2);

      // Get bibliography entries
      const bibEntries = Array.isArray(response.bibliography[1])
        ? response.bibliography[1]
        : [response.bibliography[1]];

      // Flatten entries and remove HTML tags
      const cleanOutput = bibEntries
        .map(e => (typeof e === 'string' ? e : e).replace(/<[^>]*>/g, '').trim())
        .filter(e => e.length > 0)
        .join('\n\n  ')
        .trim();

      if (testCase.expected) {
        // Exact match mode
        expect(cleanOutput).toBe(testCase.expected);
      } else if (testCase.checks) {
        // Check mode
        for (let i = 0; i < testCase.checks.length; i++) {
          const check = testCase.checks[i];
          const result = check(cleanOutput);
          if (!result) {
            console.error(`Check ${i} failed`);
            console.error('Output:', cleanOutput.substring(0, 300) + '...');
          }
          expect(result).toBe(true);
        }
      }
    });
  }
}

// Setup
test.beforeAll(async () => {
  // Verify server is running
  const testRequest = {
    items: { 'TEST': { id: 'TEST', title: 'Test', type: 'book', publisher: 'Test', 'publisher-place': 'Test', issued: { 'date-parts': [[2024]] } } },
    bibliography: true
  };
  
  try {
    await makeRequest(testRequest);
  } catch (error) {
    throw new Error('Citation server is not running on localhost:8085');
  }
});

// Test suites organized by citation type
test.describe('ДСТУ 8302:2015 Citation Formatting', () => {

  test.describe('Books', () => {
    runTestCases(BOOKS);
  });

  test.describe('Journal Articles', () => {
    runTestCases(JOURNAL_ARTICLES);
  });

  test.describe('Book Chapters', () => {
    runTestCases(CHAPTERS);
  });

  test.describe('Theses and Dissertations', () => {
    runTestCases(THESES);
  });

  test.describe('Patents', () => {
    runTestCases(PATENTS);
  });

  test.describe('Standards (ДСТУ)', () => {
    runTestCases(STANDARDS);
  });

  test.describe('Web Resources', () => {
    runTestCases(WEB_RESOURCES);
  });

  test.describe('Conference Papers', () => {
    runTestCases(CONFERENCE_PAPERS);
  });

  test.describe('Your Own Articles', () => {
    runTestCases(USER_ARTICLES);
  });

  test.describe('Sorting', () => {
    runTestCases(SORTING);
  });

});
