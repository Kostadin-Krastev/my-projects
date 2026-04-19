'use strict';
// Variable for the panels
const panelCard = document.querySelectorAll('.panel');

// Solution with looping all the panels and using "if else" to remove or add active class to the clicked panel
panelCard.forEach(function (card) {
  card.addEventListener('click', function () {
    const activePanel = document.querySelector('.active');

    // Removing active class when activePanel variable contains value (contains the active class, and is not null or undefined (empty))
    if (activePanel) {
      activePanel.classList.remove('active');
    }

    // Add active class
    card.classList.add('active');
  });
});
