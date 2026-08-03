'use strict';
// Storing the elements
const circleElements = document.querySelectorAll('.circle');
const progressElement = document.getElementById('progress');
const prevButtonElement = document.getElementById('prev');
const nextButtonElement = document.getElementById('next');

let currentStep = 1;
const totalSteps = circleElements.length;

function updateSteps() {
  // Update progress line width
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;
  progressElement.style.width = progressPercent + '%';

  // Update circles "active" status
  circleElements.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update button disable status
  prevButtonElement.disabled = currentStep === 1;
  nextButtonElement.disabled = currentStep === totalSteps;
}

// Event listeners — set up once, not inside updateSteps()
nextButtonElement.addEventListener('click', function () {
  if (currentStep < totalSteps) {
    currentStep++;
    updateSteps();
  }
});

prevButtonElement.addEventListener('click', function () {
  if (currentStep > 1) {
    currentStep--;
    updateSteps();
  }
});

// Initializing on load
updateSteps();
