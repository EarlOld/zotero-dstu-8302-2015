/**
 * Test cases for books
 * ДСТУ 8302:2015
 */

export default [
  {
    name: 'Book with single author',
    data: {
      items: {
        'ITEM-1': {
          id: 'ITEM-1',
          title: 'Телевізійні інформаційно-вимірювальні системи',
          author: [{ family: 'Маркін', given: 'М. О.' }],
          type: 'book',
          language: 'uk',
          publisher: 'КПІ ім. Ігоря Сікорського',
          'publisher-place': 'Київ',
          issued: { 'date-parts': [[2020]] },
          'number-of-pages': '285'
        }
      },
      bibliography: true
    },
    expected: '1. Маркін М. О. Телевізійні інформаційно-вимірювальні системи. Київ : КПІ ім. Ігоря Сікорського. 2020. 285 с.'
  },
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
          language: 'uk-UA',
          publisher: 'КПІ ім. Ігоря Сікорського',
          'publisher-place': 'Київ',
          issued: { 'date-parts': [[2021]] },
          'number-of-pages': '156'
        }
      },
      bibliography: true
    },
    expected: '1. Маркін М. О. та О. М. Маркіна. Формування вхідного сигналу в телевізійній інформаційно-вимірювальній системі. Київ : КПІ ім. Ігоря Сікорського. 2021. 156 с.'
  }
];
