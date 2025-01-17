// Изолируем скрипт в анонимной функции, чтобы избежать конфликтов
(function () {
  // Находим блок с уникальным классом
  const uniqueContainer = document.querySelector('.unique-cross-effect');

  // Проверяем, что блок найден
  if (uniqueContainer) {
    console.log('Unique container found!');

    // Функция для создания крестика
    function createUniqueCrossPlus() {
      const plus = document.createElement('div');
      plus.classList.add('unique-cross-plus');

      // Случайные размеры и позиции
      const size = Math.random() * 20 + 10; // Размер от 10px до 30px
      const x = Math.random() * uniqueContainer.offsetWidth; // Позиция X
      const y = Math.random() * uniqueContainer.offsetHeight; // Позиция Y
      const duration = Math.random() * 2 + 2; // Длительность анимации 2-4 секунды

      // Устанавливаем стили
      plus.style.width = `${size}px`;
      plus.style.height = `${size}px`;
      plus.style.left = `${x}px`;
      plus.style.top = `${y}px`;
      plus.style.animationDuration = `${duration}s`;

      // Добавляем крестик в контейнер
      uniqueContainer.appendChild(plus);

      // Удаляем крестик после завершения анимации
      setTimeout(() => plus.remove(), duration * 1000);
    }

    // Запускаем создание крестиков каждые 300 мс
    setInterval(createUniqueCrossPlus, 300);
  } else {
    console.error('Unique container not found!');
  }
})();
