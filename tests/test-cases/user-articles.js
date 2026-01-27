/**
 * Test cases for user's own articles
 * ДСТУ 8302:2015
 */

export default [
  {
    name: 'Own article 1: QAOA for Max-Cut (English)',
    data: {
      items: {
        'ITEM-18': {
          id: 'ITEM-18',
          title: 'Quantum Approximate Optimization Algorithm for the Max-Cut Problem: JavaScript Programming Language Implementation',
          author: [{ family: 'Sapozhnyk', given: 'Dmytro' }],
          type: 'article-journal',
          'container-title': 'Journal of Quantum Computing',
          issued: { 'date-parts': [[2024, 11, 30]] },
          DOI: '10.25673/118110',
          URL: 'http://dx.doi.org/10.25673/118110',
          language: 'en'
        }
      },
      bibliography: true
    },
    expected: '1. Sapozhnyk Dmytro. Quantum Approximate Optimization Algorithm for the Max-Cut Problem: JavaScript Programming Language Implementation. Journal of Quantum Computing. 2024. DOI: 10.25673/118110. URL: http://dx.doi.org/10.25673/118110.'
  },
  {
    name: 'Own article 2: Q# random numbers (Ukrainian)',
    data: {
      items: {
        'ITEM-19': {
          id: 'ITEM-19',
          title: 'Аналіз можливостей мови програмування Q# шляхом реалізації програми для генерації випадкових чисел',
          author: [{ family: 'Сапожник', given: 'Д. О.' }],
          type: 'article-journal',
          'container-title': 'Технічна інженерія',
          volume: '1',
          issue: '1(93)',
          page: '240-245',
          issued: { 'date-parts': [[2024]] },
          DOI: '10.26642/ten-2024-1(93)-240-245',
          URL: 'https://doi.org/10.26642/ten-2024-1(93)-240-245',
          language: 'uk'
        }
      },
      bibliography: true
    },
    expected: '1. Сапожник Д. О. Аналіз можливостей мови програмування Q# шляхом реалізації програми для генерації випадкових чисел. Технічна інженерія. 2024. Т. 1, Вип. 1(93). С. 240–245. DOI: 10.26642/ten-2024-1(93)-240-245. URL: https://doi.org/10.26642/ten-2024-1(93)-240-245.'
  },
  {
    name: 'Own article 3: Quantum transpilation (Ukrainian)',
    data: {
      items: {
        'ITEM-20': {
          id: 'ITEM-20',
          title: 'Процес перетворення високорівневих квантових вентилів у базові для виконання на реальному квантовому комп\'ютері',
          author: [{ family: 'Сапожник', given: 'Д. О.' }],
          type: 'article-journal',
          'container-title': 'Вісник Херсонського національного технічного університету',
          volume: '2',
          issue: '2(93)',
          page: '327-332',
          issued: { 'date-parts': [[2025]] },
          DOI: '10.35546/kntu2078-4481.2025.2.2.40',
          URL: 'https://doi.org/10.35546/kntu2078-4481.2025.2.2.40',
          language: 'uk'
        }
      },
      bibliography: true
    },
    checks: [
      (output) => output.includes('Сапожник Д. О.'),
      (output) => output.includes('Процес перетворення'),
      (output) => output.includes('2025'),
      (output) => output.includes('327–332'),
      (output) => output.includes('DOI: 10.35546/kntu2078-4481.2025.2.2.40')
    ]
  }
];
