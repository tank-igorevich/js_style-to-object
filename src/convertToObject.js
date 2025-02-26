'use strict';

function convertToObject(styles) {
  return styles
    .replace(/\n/g, '') // Удаляем все переводы строк
    .split(';') // Разбиваем строку на массив по ;
    .map(rule => rule.trim()) // Очищаем пробелы вокруг
    .filter(rule => rule) // Убираем пустые строки
    .reduce((acc, rule) => {
      const [property, ...valueParts] = rule.split(':');
      if (property && valueParts.length) {
        acc[property.trim()] = valueParts.join(':').trim();
      }
      return acc;
    }, {});
}

module.exports = convertToObject;
