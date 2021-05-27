// buttons
const buttons = document.querySelectorAll('button');
// display
const display = document.querySelector('.display');

// eventlistener for buttons
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);    
});

// caluclate function
function calculate(event) {
    const clickedButtonValue = event.target.value;

    if(clickedButtonValue === '=') {
        // if display is not empty
        if(display.value !== '') {
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        // clears display
        display.value = '';
    } else {
        // concatenate the numbers
        display.value += clickedButtonValue;
    }
}