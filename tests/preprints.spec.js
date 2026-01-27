/**
 * Tests for preprints
 * ДСТУ 8302:2015
 */

import { test, expect } from '@playwright/test';
import { runTestCase } from './test-utils.js';

test('Preprint (arXiv - Ukrainian)', async () => {
  await runTestCase(
    {
      name: 'Preprint (arXiv - Ukrainian)',
      data: {
        items: {
          'ITEM-PREPRINT-1': {
            id: 'ITEM-PREPRINT-1',
            title: 'Методи квантового машинного навчання для оптимізації',
            author: [
              { family: 'Петренко', given: 'І. І.' },
              { family: 'Сідоренко', given: 'В. В.' }
            ],
            type: 'preprint',
            archive: 'arXiv',
            number: '2024.12345',
            issued: { 'date-parts': [[2024]] },
            URL: 'https://arxiv.org/abs/2024.12345',
            accessed: { 'date-parts': [[2024, 1, 27]] },
            DOI: '10.48550/arXiv.2024.12345',
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Петренко І. І., Сідоренко В. В. Методи квантового машинного навчання для оптимізації. Препринт arXiv № 2024.12345. 2024. DOI: 10.48550/arXiv.2024.12345. URL: https://arxiv.org/abs/2024.12345 (accessed 27.January.2024).'
    },
    expect
  );
});

test('Preprint (medRxiv - Ukrainian)', async () => {
  await runTestCase(
    {
      name: 'Preprint (medRxiv - Ukrainian)',
      data: {
        items: {
          'ITEM-PREPRINT-2': {
            id: 'ITEM-PREPRINT-2',
            title: 'Нові підходи до квантової корекції помилок',
            author: [{ family: 'Джонсон', given: 'К. Г.' }],
            type: 'preprint',
            archive: 'medRxiv',
            number: '2024.01.15.574892',
            issued: { 'date-parts': [[2024]] },
            URL: 'https://www.medrxiv.org/content/10.1101/2024.01.15.574892v1',
            accessed: { 'date-parts': [[2024, 1, 27]] },
            DOI: '10.1101/2024.01.15.574892',
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Джонсон К. Г. Нові підходи до квантової корекції помилок. Препринт medRxiv № 2024.01.15.574892. 2024. DOI: 10.1101/2024.01.15.574892. URL: https://www.medrxiv.org/content/10.1101/2024.01.15.574892v1 (accessed 27.January.2024).'
    },
    expect
  );
});
