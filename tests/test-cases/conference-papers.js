/**
 * Test cases for conference papers
 * ДСТУ 8302:2015
 */

export default [
  {
    name: 'Conference paper',
    data: {
      items: {
        'ITEM-10': {
          id: 'ITEM-10',
          title: 'Новітні методи вимірювань',
          author: [{ family: 'Єременко', given: 'В. С.' }],
          type: 'paper-conference',
          'event-title': 'Конференція МПІ-2024',
          'event-place': 'Київ',
          issued: { 'date-parts': [[2024, 4, 18]] },
          page: '45-52'
        }
      },
      bibliography: true
    },
    expected: '1. Єременко В. С. Новітні методи вимірювань. Київ, 2024. С. 45—52.'
  }
];
