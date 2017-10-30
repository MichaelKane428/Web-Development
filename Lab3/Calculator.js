import Rx from 'rxjs/Rx';

let result = 0;
let element;
let display;
let displayRefresh = false;

const Calculator = (calculator) =>{
  display = calculator.querySelector('input');

  const buttons = document.getElementsByClassName("flex-item");

  const stream$ = Rx.Observable.from(buttons)
  .map(button => Rx.Observable.fromEvent(button, 'click')
  .mapTo(button.textContent))
  .mergeAll()
  .merge(Rx.Observable.fromEvent(document, 'keypress')
  .pluck('key'));  
  // Check for specific charaters e.g. =.
  stream$.subscribe(key => {
    if(/\d/.test(key) || key === '.') {
      if(displayRefresh) {
        display.value = key;
        displayRefresh = false;
      } 
      else{
	display.value += key;
      }
    }
    else if(key == 'C')
    {
       result = 0;
       element = '';
       display.value = expression; 
    }
    else{
    const expression = parseFloat(display.value);
    if(key === '÷' || key === '/')
    {
      result /= expression;
    }
    else if(key === 'x' || key === '*')
    {
      result *= expression;
    }
    else if(key === '+')
    {
      result += expression;
    }
    else if(key === '-')
    {
      result -= expression;
    }
    display.value = result;
    element = key;
    displayRefresh = true;
  }
});
}
Calculator(document.getElementById('calculator'));
