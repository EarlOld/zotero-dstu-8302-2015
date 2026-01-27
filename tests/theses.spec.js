/**
 * Tests for theses and dissertations
 * ДСТУ 8302:2015
 */

import { test, expect } from '@playwright/test';
import { runTestCase } from './test-utils.js';

test('Dissertation', async () => {
  await runTestCase(
    {
      name: 'Dissertation',
      data: {
        items: {
          'ITEM-6': {
            id: 'ITEM-6',
            title: 'Цифрова метрологія',
            author: [{ family: 'Здоренко', given: 'В. Г.' }],
            type: 'thesis',
            publisher: 'КПІ ім. Ігоря Сікорського',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2022]] },
            'number-of-pages': '250'
          }
        },
        bibliography: true
      },
      expected: '1. Здоренко В. Г. Цифрова метрологія : Київ : КПІ ім. Ігоря Сікорського, 2022. P. 250.'
    },
    expect
  );
});
