import Rx from 'rxjs/Rx';

let result = [];
let element;
let display;
let displayRefresh = false;

const Calculator = (calculator) =>{
  display = calculator.querySelector('input');

  //The below code can be found at the following link.
  //https://github.com/chen-yumin/rxjs-calculator-b/blob/master/src/app.js
  const buttons = document.getElementsByClassName("flex-item");
  
  //map the user keyboard and mouse click inputs.
  const stream$ = Rx.Observable.from(buttons)
  .map(button => Rx.Observable.fromEvent(button, 'click')
  .mapTo(button.textContent))
  .mergeAll()
  .merge(Rx.Observable.fromEvent(document, 'keypress')
  .pluck('key'));  

  stream$.subscribe(key => {
    //check for numbers
    if(/\d/.test(key) || key === '.') {
      if(displayRefresh) {
	result += key;
        display.value = result;
        displayRefresh = false;
      }
      else{
	result += key;
        display.value = result;
      } 
    }
    else if(key === 'C')
    {
       result = [];
       element = '';
       display.value = 0; 
    }
    else{
    if(key === '÷' || key === '/')
    {
      result += '/';
      display.value = result;
    }
    else if(key === 'x' || key === '*')
    {
      result += '*';
      display.value = result;
    }
    else if(key === '+')
    {
      result += '+';
      display.value = result;
    }
    else if(key === '-')
    {
      result += '-';
      display.value = result;
    }
    else if(key === '=')
    {
      display.value = total(display.value);
      result = []
    }
    element = key;
    displayRefresh = true;
  }
});
}
function total(expression){
    return expression = eval(expression);
}
Calculator(document.getElementById('calculator'));
