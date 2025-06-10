let buttons = document.querySelectorAll(".often-questions__button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Находим соответствующий answer для текущей кнопки
    const answer = button.nextElementSibling; // или другой способ найти соответствующий ответ

    // Переключаем классы
    button.classList.toggle("active");
    answer.classList.toggle("show");
  });
});
