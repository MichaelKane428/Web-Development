let expression = [];
let button;
let display;
const Calculator = (calculator) =>{
  
  calculator.addEventListener("click", on_click);
  calculator.addEventListener("keypress", on_keypress);
  display = calculator.querySelector('input');
  
  //https://stackoverflow.com/questions/23835150/javascript-event-listener-for-multiple-buttons-with-same-class-name
  // add an event listener for ALL BUTTONS
  function on_click() {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    let element = event.target;

    while (element) {
      if (element.nodeName === "BUTTON" && /flex-item/.test(element.className)) {
        checkChars(element.innerHTML);
        break;
      }

      element = element.parentNode;
    }
  }
  
  // add an event listener for keypresses
  function on_keypress() {
    event = event.which || event.keyCode;
    let keyChar = String.fromCharCode(event);
    checkChars(keyChar);
  }
  
  // Check for specific charaters e.g. =.
  function checkChars(element){
    
    if(element == 'C')
    {
       expression = [];
       display.value = expression; 
    }
    else if(element == '÷')
    {
      expression = expression + '/';
      display.value = expression;
    }
    else if(element == 'x')
    {
      expression = expression + '*';
      display.value = expression;
    }
    else if(element == '=')
    {
        display.value = total(display.value);
        expression = []
    }
	// check keypress inputs for specific characters to prevent letters being entered.
    else
    {
      if(['1', '2', '3','4','5','6','7','8','9','0','+','-','.','(',')','/','=','*'].includes(element)){
        expression = expression + element;
        display.value = expression;
      }
      
    }
  }
  
  function total(expression){
    return expression = eval(expression);
  }

}

Calculator(document.getElementById('calculator'));
