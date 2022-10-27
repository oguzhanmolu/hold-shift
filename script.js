'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let LastChecked;
console.log(checkboxes);

// Check function
function handleCheckbox(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === LastChecked) {
        inBetween = !inBetween;
        console.log('Checking the in between checkboxes!');
      }
      if (inBetween) checkbox.checked = true;
    });
  }
  LastChecked = this;
}

// Uncheck all event listener
window.addEventListener('keydown', (e) => {
  if (e.key == 'Escape')
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  console.log('Checkboxes Cleared!');
});

// Check event listener
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheckbox)
);
