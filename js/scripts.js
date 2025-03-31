document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const closeBtn = document.querySelector('.close-btn');
    const faqItems = document.querySelectorAll('.faq-item');

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const gameItem = e.target.closest('.game-item');
            const gameTitle = gameItem.getAttribute('data-game');
            const gameImage = gameItem.getAttribute('data-image');

            popupImage.src = gameImage;
            popupTitle.textContent = gameTitle;
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });


    // FAQ раскрытие ответов
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Находим все формы на странице
    const forms = document.querySelectorAll('form');

    // Обрабатываем событие отправки формы
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Отменяем стандартное поведение отправки формы

            // Проверяем, заполнены ли все обязательные поля
            const inputs = form.querySelectorAll('input, textarea, select');
            let allFilled = true;

            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    allFilled = false;
                    input.classList.add('error'); // Добавляем класс ошибки, если поле пустое
                } else {
                    input.classList.remove('error'); // Убираем класс ошибки, если поле заполнено
                }
            });

            // Если все поля заполнены, перенаправляем на страницу благодарности
            if (allFilled) {
                window.location.href = 'thanks.html';
            } else {
                alert('Proszę wypełnić wszystkie wymagane pola.'); // Сообщение пользователю, если поля не заполнены
            }
        });
    });
});
