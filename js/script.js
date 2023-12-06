const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => {
            if (card.classList.contains('card-active')) {
                card.classList.remove('card-active');
            }
        });
        card.classList.add('card-active');
    })
});