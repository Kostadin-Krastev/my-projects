'use strict';
// Variable for the panels
const panelCard = document.querySelectorAll('.panel');

// Solution with looping twice all the panels
panelCard.forEach(function (card) {
  card.addEventListener('click', function () {
    // Removing active class from all panels
    panelCard.forEach(function (itemCard) {
      itemCard.classList.remove('active');
    });

    // Add active class to the clicked panel
    card.classList.add('active');
  });
});

/* Here using Arrow function

panelCard.forEach((card) => {
  card.addEventListener('click', function () {
    // Removing active class from all panels
    panelCard.forEach((itemCard) => {
      itemCard.classList.remove('active');
    });

    // Add active class to the clicked panel
    card.classList.add('active');
  });
});
*/
