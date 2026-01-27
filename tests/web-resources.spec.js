/**
 * Tests for web resources
 * ДСТУ 8302:2015
 */

import { test, expect } from '@playwright/test';
import { runTestCase } from './test-utils.js';

test('Website - Organization', async () => {
  await runTestCase(
    {
      name: 'Website - Organization',
      data: {
        items: {
          'ITEM-9': {
            id: 'ITEM-9',
            title: 'Офіційний сайт КПІ',
            author: [{ family: 'КПІ' }],
            type: 'webpage',
            URL: 'https://kpi.ua/',
            accessed: { 'date-parts': [[2024, 1, 26]] }
          }
        },
        bibliography: true
      },
      expected: '1. КПІ. Офіційний сайт КПІ. URL: https://kpi.ua/ (дата звернення 26.січень.2024).'
    },
    expect
  );
});

test('Website - Individual author', async () => {
  await runTestCase(
    {
      name: 'Website - Individual author',
      data: {
        items: {
          'ITEM-WEB1': {
            id: 'ITEM-WEB1',
            title: 'Як правильно цитувати джерела',
            author: [{ family: 'Іванов', given: 'О. М.' }],
            type: 'webpage',
            URL: 'https://example.com/citations/',
            accessed: { 'date-parts': [[2023, 12, 15]] }
          }
        },
        bibliography: true
      },
      expected: '1. Іванов О. М. Як правильно цитувати джерела. URL: https://example.com/citations/ (дата звернення 15.грудень.2023).'
    },
    expect
  );
});

test('Website - Multiple authors', async () => {
  await runTestCase(
    {
      name: 'Website - Multiple authors',
      data: {
        items: {
          'ITEM-WEB2': {
            id: 'ITEM-WEB2',
            title: 'Веб-стандарти та рекомендації',
            author: [
              { family: 'Петренко', given: 'І. І.' },
              { family: 'Сідоренко', given: 'В. В.' }
            ],
            type: 'webpage',
            URL: 'https://standards.example.org/',
            accessed: { 'date-parts': [[2024, 2, 10]] }
          }
        },
        bibliography: true
      },
      expected: '1. Петренко І. І. та В. В. Сідоренко. Веб-стандарти та рекомендації. URL: https://standards.example.org/ (дата звернення 10.лютий.2024).'
    },
    expect
  );
});

test('Website - No author', async () => {
  await runTestCase(
    {
      name: 'Website - No author',
      data: {
        items: {
          'ITEM-WEB3': {
            id: 'ITEM-WEB3',
            title: 'Англійська мова онлайн',
            type: 'webpage',
            URL: 'https://english-learning.edu/',
            accessed: { 'date-parts': [[2024, 3, 5]] }
          }
        },
        bibliography: true
      },
      expected: '1. Англійська мова онлайн. URL: https://english-learning.edu/ (дата звернення 5.березень.2024).'
    },
    expect
  );
});

test('Website - With accessed date', async () => {
  await runTestCase(
    {
      name: 'Website - With accessed date',
      data: {
        items: {
          'ITEM-WEB4': {
            id: 'ITEM-WEB4',
            title: 'Новини інформатики',
            author: [{ family: 'Технологічний портал' }],
            type: 'webpage',
            URL: 'https://news.tech.com/info/',
            accessed: { 'date-parts': [[2024, 1, 20]] }
          }
        },
        bibliography: true
      },
      expected: '1. Технологічний портал. Новини інформатики. URL: https://news.tech.com/info/ (дата звернення 20.січень.2024).'
    },
    expect
  );
});
