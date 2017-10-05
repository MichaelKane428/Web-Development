let mynumber;
let button;
let display;
const Calculator = (calculator) =>{
  
  calculator.addEventListener("click", on_click);
  calculator.addEventListener("keypress", on_keypress);
  display = calculator.querySelector('input');
  function on_click() {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    // Climb up the document tree from the target of the event
    while (element) {
      if (element.nodeName === "BUTTON" && /flex-item/.test(element.className)) {
        display.value = element.innerHTML;
        break;
      }

      element = element.parentNode;
    }
  }

  function on_keypress() {
    display.value = button[0].innerHTML;
  }
}

Calculator(document.getElementById('calculator'));