/**
 * Utility functions for citation testing
 * ДСТУ 8302:2015 tests
 */

import http from 'http';

/**
 * Make HTTP request to citation server
 * @param {object} body - Request body with items and options
 * @returns {Promise<object>} - Citation server response
 */
export function makeRequest(body) {
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

/**
 * Process bibliography response and return clean text
 * @param {object} response - Citation server response
 * @returns {string} - Cleaned bibliography text
 */
export function cleanBibliography(response) {
  // Verify response structure
  if (!response.bibliography || !Array.isArray(response.bibliography)) {
    throw new Error('Invalid response structure: missing bibliography array');
  }

  if (response.bibliography.length < 2) {
    throw new Error('Bibliography response too short');
  }

  // Get bibliography entries
  const bibEntries = Array.isArray(response.bibliography[1])
    ? response.bibliography[1]
    : [response.bibliography[1]];

  // Flatten entries and remove HTML tags
  return bibEntries
    .map(e => (typeof e === 'string' ? e : e).replace(/<[^>]*>/g, '').trim())
    .filter(e => e.length > 0)
    .join('\n\n  ')
    .trim();
}

/**
 * Run a single test case
 * @param {object} testCase - Test case with name, data, and expected/checks
 * @param {function} expect - Playwright expect function
 * @returns {Promise<void>}
 */
export async function runTestCase(testCase, expect) {
  const response = await makeRequest(testCase.data);
  const cleanOutput = cleanBibliography(response);

  if (testCase.expected) {
    // Exact match mode
    expect(cleanOutput).toBe(testCase.expected);
  } else if (testCase.checks) {
    // Check mode - array of validation functions
    for (let i = 0; i < testCase.checks.length; i++) {
      const check = testCase.checks[i];
      const result = check(cleanOutput);
      if (!result) {
        throw new Error(
          `Check ${i} failed.\nOutput: ${cleanOutput.substring(0, 300)}...`
        );
      }
    }
  } else {
    throw new Error('Test case must have either expected or checks property');
  }
}
