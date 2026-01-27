/**
 * Tests for book chapters
 * ДСТУ 8302:2015
 */

import { test, expect } from '@playwright/test';
import { runTestCase } from './test-utils.js';

test('Chapter in book', async () => {
  await runTestCase(
    {
      name: 'Chapter in book',
      data: {
        items: {
          'ITEM-5': {
            id: 'ITEM-5',
            title: 'Методи обробки сигналів',
            author: [{ family: 'Порєв', given: 'В. А.' }],
            type: 'chapter',
            'container-title': 'Телевізійні системи',
            editor: [{ family: 'Маркін', given: 'М. О.' }],
            publisher: 'КПІ ім. Ігоря Сікорського',
            'publisher-place': 'Київ',
            page: '123-145',
            issued: { 'date-parts': [[2020]] },
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Порєв В. А. Методи обробки сигналів. У: Телевізійні системи ed. М. О. Маркін. Київ : КПІ ім. Ігоря Сікорського, 2020. P. 123–145.'
    },
    expect
  );
});
