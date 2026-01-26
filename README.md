# ДСТУ 8302:2015 Citation Style

Реалізація стилю цитування для стандарту **ДСТУ 8302:2015** (Інформація та документація. Бібліографічне посилання).

## Характеристики

- ✅ Сортування по алфавіту (українські джерела першими)
- ✅ Підтримка 11+ типів джерел (книги, статті, патенти, стандарти, вебсайти тощо)
- ✅ Умовне форматування залежно від мови (English vs Українська)
- ✅ 20 тестів (Playwright E2E)
- ✅ ES6 модулі
- ✅ Node.js v22+

## Швидкий старт

```bash
# Встановлення
git clone https://github.com/EarlOld/zotero-dstu-8302-2015.git
cd zotero-dstu-8302-2015
npm install

# Отримання citeproc-node та його залежностей
git clone https://github.com/zotero/citeproc-node.git
git clone https://github.com/citation-style-language/styles.git citeproc-node/csl
git clone https://github.com/citation-style-language/locales.git citeproc-node/csl-locales
cd citeproc-node && npm install && cd ..

# Запуск сервера та тестів
npm run start:server    # у першому терміналі
npm test                # у другому терміналі
```

## Документація

Див. [SETUP.md](SETUP.md) для детальних інструкцій.

## Встановлення в Zotero

1. **Правка** → **Налаштування** → **Цитування**
2. Натисніть **[ + ]**
3. Виберіть файл `dstu-8302-2015.csl`
4. Виберіть **ДСТУ 8302:2015 (Ukrainian)** у списку форматів
5. Натисніть **OK**