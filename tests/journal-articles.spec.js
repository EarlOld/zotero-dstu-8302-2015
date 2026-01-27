/**
 * Tests for journal articles
 * ДСТУ 8302:2015
 */

import { test, expect } from '@playwright/test';
import { runTestCase } from './test-utils.js';

test('Journal article (Ukrainian)', async () => {
  await runTestCase(
    {
      name: 'Journal article (Ukrainian)',
      data: {
        items: {
          'ITEM-3': {
            id: 'ITEM-3',
            title: 'Телевізійні методи контролю якості',
            author: [{ family: 'Єременко', given: 'В. С.' }],
            type: 'article-journal',
            'container-title': 'Вісники КПІ',
            volume: '12',
            issue: '3',
            page: '45-52',
            issued: { 'date-parts': [[2020]] },
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Єременко В. С. Телевізійні методи контролю якості. Вісники КПІ. 2020. Vol. 12, Issue 3. P. 45–52.'
    },
    expect
  );
});

test('Journal article (English)', async () => {
  await runTestCase(
    {
      name: 'Journal article (English)',
      data: {
        items: {
          'ITEM-4': {
            id: 'ITEM-4',
            title: 'Digital signal processing',
            author: [{ family: 'Smith', given: 'J.' }],
            type: 'article-journal',
            'container-title': 'IEEE Transactions',
            volume: '15',
            page: '123-135',
            issued: { 'date-parts': [[2021]] },
            language: 'en'
          }
        },
        bibliography: true
      },
      expected: '1. Smith J. Digital signal processing. IEEE Transactions. 2021. Vol. 15. P. 123–135.'
    },
    expect
  );
});

test('Journal article (Ukrainian) - Example 2', async () => {
  await runTestCase(
    {
      name: 'Journal article (Ukrainian) - Example 2',
      data: {
        items: {
          'ITEM-12': {
            id: 'ITEM-12',
            title: 'Ультразвуковий метод контролю якості текстильних матеріалів',
            author: [
              { family: 'Здоренко', given: 'В. Г.' },
              { family: 'Защепкіна', given: 'Н. М.' }
            ],
            type: 'article-journal',
            'container-title': 'Архіви матеріалознавства та інженерії',
            volume: '97',
            issue: '1-2',
            page: '39-49',
            issued: { 'date-parts': [[2019]] },
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Здоренко В. Г., Защепкіна Н. М. Ультразвуковий метод контролю якості текстильних матеріалів. Архіви матеріалознавства та інженерії. 2019. Vol. 97, Issue 1–2. P. 39–49.'
    },
    expect
  );
});

test('Journal article (Ukrainian) - Example 3', async () => {
  await runTestCase(
    {
      name: 'Journal article (Ukrainian) - Example 3',
      data: {
        items: {
          'ITEM-13': {
            id: 'ITEM-13',
            title: 'Цифрові методи обробки сигналів у вимірювальних системах',
            author: [{ family: 'Єременко', given: 'В. С.' }],
            type: 'article-journal',
            'container-title': 'Метрологія та прилади',
            issue: '4',
            page: '23-30',
            issued: { 'date-parts': [[2022]] },
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Єременко В. С. Цифрові методи обробки сигналів у вимірювальних системах. Метрологія та прилади. 2022. Issue 4. P. 23–30.'
    },
    expect
  );
});

test('Journal article with series and issue', async () => {
  await runTestCase(
    {
      name: 'Journal article with series and issue',
      data: {
        items: {
          'ITEM-14': {
            id: 'ITEM-14',
            title: 'Оцінка точності вимірювання геометричних параметрів за допомогою телевізійних інформаційно-вимірювальних систем',
            author: [{ family: 'Маркін', given: 'М. О.' }],
            type: 'article-journal',
            'container-title': 'Вісник КПІ',
            'collection-title': 'Серія "Приладобудування"',
            volume: '59',
            issue: '1',
            page: '78-85',
            issued: { 'date-parts': [[2020]] },
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Маркін М. О. Оцінка точності вимірювання геометричних параметрів за допомогою телевізійних інформаційно-вимірювальних систем. Вісник КПІ. 2020. Vol. 59, Issue 1. P. 78–85.'
    },
    expect
  );
});

test('Journal article with two authors and volume range', async () => {
  await runTestCase(
    {
      name: 'Journal article with two authors and volume range',
      data: {
        items: {
          'ITEM-15': {
            id: 'ITEM-15',
            title: 'Ультразвуковий метод контролю якості текстильних матеріалів',
            author: [
              { family: 'Здоренко', given: 'В. Г.' },
              { family: 'Защепкіна', given: 'Н. М.' }
            ],
            type: 'article-journal',
            'container-title': 'Архіви матеріалознавства та інженерії',
            volume: '97',
            issue: '1-2',
            page: '39-49',
            issued: { 'date-parts': [[2019]] },
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Здоренко В. Г., Защепкіна Н. М. Ультразвуковий метод контролю якості текстильних матеріалів. Архіви матеріалознавства та інженерії. 2019. Vol. 97, Issue 1–2. P. 39–49.'
    },
    expect
  );
});

test('Journal article with DOI and access date', async () => {
  await runTestCase(
    {
      name: 'Journal article with DOI and access date',
      data: {
        items: {
          'ITEM-16': {
            id: 'ITEM-16',
            title: 'Телевізійні інформаційно-вимірювальні системи в технологіях електронно-променевої обробки',
            author: [
              { family: 'Порєв', given: 'В. А.' },
              { family: 'Маркіна', given: 'О. М.' }
            ],
            type: 'article-journal',
            'container-title': 'Наукові вісті КПІ',
            issue: '3',
            page: '67-74',
            issued: { 'date-parts': [[2021]] },
            DOI: '10.20535/kpi.2021.3.67-74',
            URL: 'https://doi.org/10.20535/kpi.2021.3.67-74',
            accessed: { 'date-parts': [[2024, 3, 15]] },
            language: 'uk'
          }
        },
        bibliography: true
      },
      expected: '1. Порєв В. А., Маркіна О. М. Телевізійні інформаційно-вимірювальні системи в технологіях електронно-променевої обробки. Наукові вісті КПІ. 2021. Issue 3. P. 67–74. DOI: 10.20535/kpi.2021.3.67-74. URL: https://doi.org/10.20535/kpi.2021.3.67-74 (accessed 15.March.2024).'
    },
    expect
  );
});

test('Journal article in English with volume and issue', async () => {
  await runTestCase(
    {
      name: 'Journal article in English with volume and issue',
      data: {
        items: {
          'ITEM-17': {
            id: 'ITEM-17',
            title: 'Advanced television measurement systems in industrial applications',
            author: [
              { family: 'Wilson', given: 'M.' },
              { family: 'Davis', given: 'P.' }
            ],
            type: 'article-journal',
            'container-title': 'Journal of Measurement Science',
            volume: '45',
            issue: '3',
            page: '234-248',
            issued: { 'date-parts': [[2023]] },
            URL: 'https://doi.org/10.1016/j.jms.2023.05.012',
            accessed: { 'date-parts': [[2024, 4, 12]] },
            language: 'en'
          }
        },
        bibliography: true
      },
      expected: '1. Wilson M., Davis P. Advanced television measurement systems in industrial applications. Journal of Measurement Science. 2023. Vol. 45, Issue 3. P. 234–248. URL: https://doi.org/10.1016/j.jms.2023.05.012 (accessed 12.April.2024).'
    },
    expect
  );
});
