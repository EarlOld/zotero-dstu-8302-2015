/**
 * Test cases for journal articles
 * ДСТУ 8302:2015
 */

export default [
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
    expected: '1. Єременко В. С. Телевізійні методи контролю якості. Вісники КПІ. 2020. Т. 12, Вип. 3. С. 45—52.'
  },
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
    expected: '1. Smith J. Digital signal processing. IEEE Transactions. 2021. Т. 15. С. 123—135.'
  },
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
    expected: '1. Здоренко В. Г. та Н. М. Защепкіна. Ультразвуковий метод контролю якості текстильних матеріалів. Архіви матеріалознавства та інженерії. 2019. Т. 97, Вип. 1—2. С. 39—49.'
  },
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
    expected: '1. Єременко В. С. Цифрові методи обробки сигналів у вимірювальних системах. Метрологія та прилади. 2022. Вип. 4. С. 23—30.'
  },
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
    expected: '1. Маркін М. О. Оцінка точності вимірювання геометричних параметрів за допомогою телевізійних інформаційно-вимірювальних систем. Вісник КПІ. 2020. Т. 59, Вип. 1. С. 78—85.'
  },
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
    expected: '1. Здоренко В. Г. та Н. М. Защепкіна. Ультразвуковий метод контролю якості текстильних матеріалів. Архіви матеріалознавства та інженерії. 2019. Т. 97, Вип. 1—2. С. 39—49.'
  },
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
    expected: '1. Порєв В. А. та О. М. Маркіна. Телевізійні інформаційно-вимірювальні системи в технологіях електронно-променевої обробки. Наукові вісті КПІ. 2021. Вип. 3. С. 67—74. DOI: 10.20535/kpi.2021.3.67-74. URL: https://doi.org/10.20535/kpi.2021.3.67-74 (дата звернення 15.березень.2024).'
  },
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
    expected: '1. Wilson M. та P. Davis. Advanced television measurement systems in industrial applications. Journal of Measurement Science. 2023. Т. 45, Вип. 3. С. 234—248. URL: https://doi.org/10.1016/j.jms.2023.05.012 (дата звернення 12.квітень.2024).'
  }
];
