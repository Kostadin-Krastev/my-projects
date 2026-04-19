'use strict';
// Variable for the panels
const panelCards = document.querySelectorAll('.panel');

// Solution with looping all the panels and using "if else" to remove or add active class to the clicked panel
panelCards.forEach(function (card) {
  card.addEventListener('click', function () {
    // Storing the active card
    const activeCard = document.querySelector('.active');

    // Removing active class when activePanel variable contains value (contains the active class, and is not null or undefined (empty))
    if (activeCard) {
      activeCard.classList.remove('active');
    }

    // Add active class
    card.classList.add('active');
  });
});
