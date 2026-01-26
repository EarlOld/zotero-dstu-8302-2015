/**
 * Test cases for sorting
 * ДСТУ 8302:2015
 */

export default [
  {
    name: "Multiple sources - should sort Ukrainian first",
    data: {
      items: {
        "ITEM-UK": {
          id: "ITEM-UK",
          title: "Українське джерело",
          author: [{ family: "Петренко", given: "І. І." }],
          type: "book",
          publisher: "Видавництво",
          "publisher-place": "Київ",
          issued: { "date-parts": [[2020]] },
          "number-of-pages": "100",
          language: "uk",
        },
        "ITEM-EN1": {
          id: "ITEM-EN1",
          title: "English source",
          author: [{ family: "Smith", given: "J." }],
          type: "book",
          publisher: "Publisher",
          "publisher-place": "London",
          issued: { "date-parts": [[2020]] },
          "number-of-pages": "150",
          language: "en",
        },
      },
      bibliography: true,
    },
    expected:
      "1. Петренко І. І. Українське джерело. Київ : Видавництво. 2020. 100 с.\n\n  2. Smith J. English source. London : Publisher. 2020. 150 с.",
  },
  {
    name: "Multiple sources with alphabetical sorting - Ukrainian and English",
    data: {
      items: {
        "ITEM-UK3": {
          id: "ITEM-UK3",
          title: "Третій український",
          author: [{ family: "Федоренко", given: "В." }],
          type: "book",
          publisher: "Видавництво",
          "publisher-place": "Київ",
          issued: { "date-parts": [[2019]] },
          "number-of-pages": "200",
          language: "uk",
        },
        "ITEM-EN2": {
          id: "ITEM-EN2",
          title: "Brown work",
          author: [{ family: "Brown", given: "A." }],
          type: "book",
          publisher: "Publisher",
          "publisher-place": "London",
          issued: { "date-parts": [[2021]] },
          "number-of-pages": "180",
          language: "en",
        },
        "ITEM-UK1": {
          id: "ITEM-UK1",
          title: "Перший український",
          author: [{ family: "Абраменко", given: "М." }],
          type: "book",
          publisher: "Видавництво",
          "publisher-place": "Київ",
          issued: { "date-parts": [[2018]] },
          "number-of-pages": "250",
          language: "uk",
        },
        "ITEM-EN3": {
          id: "ITEM-EN3",
          title: "Wilson study",
          author: [{ family: "Wilson", given: "R." }],
          type: "book",
          publisher: "Publisher",
          "publisher-place": "Boston",
          issued: { "date-parts": [[2022]] },
          "number-of-pages": "160",
          language: "en",
        },
        "ITEM-UK2": {
          id: "ITEM-UK2",
          title: "Другий український",
          author: [{ family: "Дмитренко", given: "О." }],
          type: "book",
          publisher: "Видавництво",
          "publisher-place": "Київ",
          issued: { "date-parts": [[2020]] },
          "number-of-pages": "210",
          language: "uk",
        },
        "ITEM-EN1": {
          id: "ITEM-EN1",
          title: "Anderson research",
          author: [{ family: "Anderson", given: "T." }],
          type: "book",
          publisher: "Publisher",
          "publisher-place": "New York",
          issued: { "date-parts": [[2020]] },
          "number-of-pages": "190",
          language: "en",
        },
      },
      bibliography: true,
    },
    checks: [
      (output) => output.indexOf("Абраменко") < output.indexOf("Дмитренко"), // Українські за алфавітом
      (output) => output.indexOf("Дмитренко") < output.indexOf("Федоренко"), // Українські за алфавітом
      (output) => output.indexOf("Федоренко") < output.indexOf("Anderson"), // Все укр перед англ
      (output) => output.indexOf("Anderson") < output.indexOf("Brown"), // Англійські за алфавітом
      (output) => output.indexOf("Brown") < output.indexOf("Wilson"), // Англійські за алфавітом
    ],
  },
];
