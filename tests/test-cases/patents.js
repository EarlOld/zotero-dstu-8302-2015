/**
 * Test cases for patents
 * ДСТУ 8302:2015
 */

export default [
  {
    name: 'Patent',
    data: {
      items: {
        'ITEM-7': {
          id: 'ITEM-7',
          title: 'Телевізійна система контролю',
          type: 'patent',
          number: '98765',
          jurisdiction: 'Україна',
          classification: 'G01J 5/00',
          issued: { 'date-parts': [[2014, 11, 25]] },
          'number-of-pages': '6'
        }
      },
      bibliography: true
    },
    expected: '1. Телевізійна система контролю : № 98765 Україна : G01J 5/00 25.листопад.2014 . 6 с.'
  }
];
