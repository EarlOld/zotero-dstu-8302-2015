/**
 * Tests for books
 * ДСТУ 8302:2015
 */

import { test, expect } from '@playwright/test';
import { runTestCase } from './test-utils.js';

test('Book with single author', async () => {
  await runTestCase(
    {
      name: 'Book with single author',
      data: {
        items: {
          'ITEM-1': {
            id: 'ITEM-1',
            title: 'Телевізійні інформаційно-вимірювальні системи',
            author: [{ family: 'Маркін', given: 'М. О.' }],
            type: 'book',
            language: 'uk',            publisher: 'КПІ ім. Ігоря Сікорського',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2020]] },
            'number-of-pages': '285'
          }
        },
        bibliography: true
      },
      expected: '1. М. О. Маркін. Телевізійні інформаційно-вимірювальні системи. Київ : КПІ ім. Ігоря Сікорського. 2020. 285 с.'
    },
    expect
  );
});

test('Book with two authors', async () => {
  await runTestCase(
    {
      name: 'Book with two authors',
      data: {
        items: {
          'ITEM-2': {
            id: 'ITEM-2',
            title: 'Формування вхідного сигналу в телевізійній інформаційно-вимірювальній системі',
            author: [
              { family: 'Маркін', given: 'М. О.' },
              { family: 'Маркіна', given: 'О. М.' }
            ],
            type: 'book',
            language: 'uk',            publisher: 'КПІ ім. Ігоря Сікорського',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2021]] },
            'number-of-pages': '156'
          }
        },
        bibliography: true
      },
      expected: '1. М. О. Маркін, О. М. Маркіна. Формування вхідного сигналу в телевізійній інформаційно-вимірювальній системі. Київ : КПІ ім. Ігоря Сікорського. 2021. 156 с.'
    },
    expect
  );
});

test('Book with three authors (Ukrainian)', async () => {
  await runTestCase(
    {
      name: 'Book with three authors (Ukrainian)',
      data: {
        items: {
          'ITEM-3': {
            id: 'ITEM-3',
            title: 'Обробка сигналів у телевізійних системах',
            author: [
              { family: 'Петренко', given: 'І. І.' },
              { family: 'Сідоренко', given: 'В. В.' },
              { family: 'Іванов', given: 'О. М.' }
            ],
            type: 'book',
            language: 'uk',            publisher: 'Видавництво КПІ',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2022]] },
            'number-of-pages': '320'
          }
        },
        bibliography: true
      },
      expected: '1. І. І. Петренко, В. В. Сідоренко, О. М. Іванов. Обробка сигналів у телевізійних системах. Київ : Видавництво КПІ. 2022. 320 с.'
    },
    expect
  );
});

test('Book with four authors (Ukrainian)', async () => {
  await runTestCase(
    {
      name: 'Book with four authors (Ukrainian)',
      data: {
        items: {
          'ITEM-4': {
            id: 'ITEM-4',
            title: 'Цифрова обробка сигналів',
            author: [
              { family: 'Петренко', given: 'І. І.' },
              { family: 'Сідоренко', given: 'В. В.' },
              { family: 'Іванов', given: 'О. М.' },
              { family: 'Коваленко', given: 'Р. В.' }
            ],
            type: 'book',
            language: 'uk',            publisher: 'Видавництво КПІ',
            'publisher-place': 'Київ',
            issued: { 'date-parts': [[2023]] },
            'number-of-pages': '450'
          }
        },
        bibliography: true
      },
      expected: '1. І. І. Петренко, В. В. Сідоренко, О. М. Іванов et al. Цифрова обробка сигналів. Київ : Видавництво КПІ. 2023. 450 с.'
    },
    expect
  );
});

test('Book with three authors (English)', async () => {
  await runTestCase(
    {
      name: 'Book with three authors (English)',
      data: {
        items: {
          'ITEM-5': {
            id: 'ITEM-5',
            title: 'Advanced Signal Processing Techniques',
            author: [
              { family: 'Smith', given: 'J.' },
              { family: 'Johnson', given: 'M.' },
              { family: 'Brown', given: 'A.' }
            ],
            type: 'book',
            language: 'en',
            publisher: 'Academic Press',
            'publisher-place': 'London',
            issued: { 'date-parts': [[2021]] },
            'number-of-pages': '380'
          }
        },
        bibliography: true
      },
      expected: '1. J. Smith, M. Johnson, A. Brown. Advanced Signal Processing Techniques. London : Academic Press. 2021. 380 с.'
    },
    expect
  );
});

test('Book with five authors (English)', async () => {
  await runTestCase(
    {
      name: 'Book with five authors (English)',
      data: {
        items: {
          'ITEM-6': {
            id: 'ITEM-6',
            title: 'Digital Communication Systems',
            author: [
              { family: 'Wilson', given: 'R.' },
              { family: 'Davis', given: 'K.' },
              { family: 'Taylor', given: 'P.' },
              { family: 'Anderson', given: 'L.' },
              { family: 'Thomas', given: 'S.' }
            ],
            type: 'book',
            language: 'en',
            publisher: 'Springer',
            'publisher-place': 'New York',
            issued: { 'date-parts': [[2020]] },
            'number-of-pages': '520'
          }
        },
        bibliography: true
      },
      expected: '1. R. Wilson, K. Davis, P. Taylor et al. Digital Communication Systems. New York : Springer. 2020. 520 с.'
    },
    expect
  );
});
