/**
 * Tests for sorting
 * ДСТУ 8302:2015
 */

import { test, expect } from '@playwright/test';
import { runTestCase } from './test-utils.js';

test('Multiple sources - should sort Ukrainian first', async () => {
  await runTestCase(
    {
      name: 'Multiple sources - should sort Ukrainian first',
      data: {
        items: {
          'ITEM-UK': {
            id: 'ITEM-UK',
            title: 'Українське джерело',
            author: [{ family: 'Петренко', given: 'І. І.' }],
            type: 'book',
            publisher: 'Видавництво',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2020]] },
            'number-of-pages': '100',
          },
          'ITEM-EN1': {
            id: 'ITEM-EN1',
            title: 'English source',
            author: [{ family: 'Smith', given: 'J.' }],
            type: 'book',
            publisher: 'Publisher',
            'publisher-place': 'London',
            issued: { 'date-parts': [[2020]] },
            'number-of-pages': '150',
          }
        },
        bibliography: true
      },
      expected: '1. J. Smith. English source. London : Publisher. 2020. 150 с.\n\n  2. І. І. Петренко. Українське джерело. Київ : Видавництво. 2020. 100 с.'
    },
    expect
  );
});

test('Multiple sources with alphabetical sorting - Ukrainian and English', async () => {
  await runTestCase(
    {
      name: 'Multiple sources with alphabetical sorting - Ukrainian and English',
      data: {
        items: {
          'ITEM-UK3': {
            id: 'ITEM-UK3',
            title: 'Третій український',
            author: [{ family: 'Федоренко', given: 'В.' }],
            type: 'book',
            publisher: 'Видавництво',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2019]] },
            'number-of-pages': '200',
          },
          'ITEM-EN2': {
            id: 'ITEM-EN2',
            title: 'Brown work',
            author: [{ family: 'Brown', given: 'A.' }],
            type: 'book',
            publisher: 'Publisher',
            'publisher-place': 'London',
            issued: { 'date-parts': [[2021]] },
            'number-of-pages': '180',
          },
          'ITEM-UK1': {
            id: 'ITEM-UK1',
            title: 'Перший український',
            author: [{ family: 'Абраменко', given: 'М.' }],
            type: 'book',
            publisher: 'Видавництво',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2018]] },
            'number-of-pages': '250',
          },
          'ITEM-EN3': {
            id: 'ITEM-EN3',
            title: 'Wilson study',
            author: [{ family: 'Wilson', given: 'R.' }],
            type: 'book',
            publisher: 'Publisher',
            'publisher-place': 'Boston',
            issued: { 'date-parts': [[2022]] },
            'number-of-pages': '160',
          },
          'ITEM-UK2': {
            id: 'ITEM-UK2',
            title: 'Другий український',
            author: [{ family: 'Дмитренко', given: 'О.' }],
            type: 'book',
            publisher: 'Видавництво',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2020]] },
            'number-of-pages': '210',
          },
          'ITEM-EN1': {
            id: 'ITEM-EN1',
            title: 'Anderson research',
            author: [{ family: 'Anderson', given: 'T.' }],
            type: 'book',
            publisher: 'Publisher',
            'publisher-place': 'New York',
            issued: { 'date-parts': [[2020]] },
            'number-of-pages': '190',
          }
        },
        bibliography: true
      },
      checks: [
        (output) => output.indexOf('Anderson') < output.indexOf('Brown'), // Англійські за алфавітом
        (output) => output.indexOf('Brown') < output.indexOf('Wilson'), // Англійські за алфавітом
        (output) => output.indexOf('Wilson') < output.indexOf('Абраменко'), // Все англ перед укр
        (output) => output.indexOf('Абраменко') < output.indexOf('Дмитренко'), // Українські за алфавітом
        (output) => output.indexOf('Дмитренко') < output.indexOf('Федоренко') // Українські за алфавітом
      ]
    },
    expect
  );
});
