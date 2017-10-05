let expression = [];
let button;
let display;
const Calculator = (calculator) =>{
  
  calculator.addEventListener("click", on_click);
  calculator.addEventListener("keypress", on_keypress);
  display = calculator.querySelector('input');
  
  //https://stackoverflow.com/questions/23835150/javascript-event-listener-for-multiple-buttons-with-same-class-name
  function on_click() {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    let element = event.target;

    while (element) {
      if (element.nodeName === "BUTTON" && /flex-item/.test(element.className)) {
        checkChars(element);
        break;
      }

      element = element.parentNode;
    }
  }
  
  function checkChars(element){
    let char = element.innerHTML;
    
    if(char == 'C')
    {
       expression = [];
       display.value = expression; 
    }
    else if(char == '÷')
    {
      expression = expression + '/';
      display.value = expression;
    }
    else if(char == 'x')
    {
      expression = expression + '*';
      display.value = expression;
    }
    else if(char == '=')
    {
      display.value = total(display.value);
      expression = []
    }
    else
    {
      expression = expression + element.innerHTML;
      display.value = expression;
    }
  }
  
  function total(expression){
    return expression = eval(expression);
  }
  function on_keypress() {
    display.value = button[0].innerHTML;
  }
}

Calculator(document.getElementById('calculator'));