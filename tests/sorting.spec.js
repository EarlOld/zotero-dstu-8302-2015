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
            language: 'uk',
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
            language: 'en',
            publisher: 'Publisher',
            'publisher-place': 'London',
            issued: { 'date-parts': [[2020]] },
            'number-of-pages': '150',
          }
        },
        bibliography: true
      },
      expected: '1. Петренко І. І. Українське джерело. Київ : Видавництво. 2020. 100 с.\n\n  2. Smith J. English source. London : Publisher. 2020. 150 с.'
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
            language: 'uk',
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
            language: 'en',
            publisher: 'Publisher',
            'publisher-place': 'London',
            issued: { 'date-parts': [[2021]] },
            'number-of-pages': '180',
          },
          'ITEM-UK1': {
            id: 'ITEM-UK1',
            title: 'Третій український',
            author: [{ family: 'Коваленко', given: 'М. В.' }],
            type: 'book',
            language: 'uk',
            publisher: 'Видавництво',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2018]] },
            'number-of-pages': '250',
          },
          'ITEM-EN3': {
            id: 'ITEM-EN3',
            title: 'Wilson study',
            author: [{ family: 'Wilson', given: 'P.' }],
            type: 'book',
            language: 'en',
            publisher: 'Publisher',
            'publisher-place': 'Boston',
            issued: { 'date-parts': [[2022]] },
            'number-of-pages': '160',
          },
          'ITEM-UK2': {
            id: 'ITEM-UK2',
            title: 'Другий український',
            author: [{ family: 'Іванов', given: 'В. І.' }],
            type: 'book',
            language: 'uk',
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
            language: 'en',
            publisher: 'Publisher',
            'publisher-place': 'New York',
            issued: { 'date-parts': [[2020]] },
            'number-of-pages': '190',
          },
          'ITEM-UK4': {
            id: 'ITEM-UK4',
            title: 'Економічні та промислові застосування квантових компʼютерів',
            author: [
              { family: 'Сапожник', given: 'Дмитро Олегович' },
              { family: 'Морозов', given: 'Андрій Васильович' }
            ],
            type: 'paper-conference',
            language: 'uk',
            'event-title': 'Тези Всеукраїнської науково-практичної інтернет-конференції студентів, аспірантів та молодих вчених',
            'publisher-place': 'Хмельницький',
            page: '113-116',
            issued: { 'date-parts': [[2022, 11, 29]] },
          }
        },
        bibliography: true
      },
      checks: [
        (output) => output.indexOf('Іванов') < output.indexOf('Коваленко'), // Українські за алфавітом
        (output) => output.indexOf('Коваленко') < output.indexOf('Сапожник'), // Українські за алфавітом
        (output) => output.indexOf('Сапожник') < output.indexOf('Федоренко'), // Українські за алфавітом
        (output) => output.indexOf('Федоренко') < output.indexOf('Anderson'), // Все укр перед англ
        (output) => output.indexOf('Anderson') < output.indexOf('Brown'), // Англійські за алфавітом
        (output) => output.indexOf('Brown') < output.indexOf('Wilson') // Англійські за алфавітом
      ]
    },
    expect
  );
});
