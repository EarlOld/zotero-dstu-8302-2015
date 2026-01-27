/**
 * Tests for standards
 * ДСТУ 8302:2015
 */

import { test, expect } from '@playwright/test';
import { runTestCase } from './test-utils.js';

test('Standard (ДСТУ)', async () => {
  await runTestCase(
    {
      name: 'Standard (ДСТУ)',
      data: {
        items: {
          'ITEM-8': {
            id: 'ITEM-8',
            title: 'Інформація та документація. Бібліографічне посилання',
            number: 'ДСТУ 8302:2015',
            type: 'standard',
            status: 'Чинний від 2016-07-01',
            publisher: 'УкрНДНЦ',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2016]] },
            'number-of-pages': '16'
          }
        },
        bibliography: true
      },
      expected: '1. Інформація та документація. Бібліографічне посилання. ДСТУ ДСТУ 8302:2015. Чинний від Чинний від 2016-07-01 . Київ : УкрНДНЦ, 2016. 16 с.'
    },
    expect
  );
});
