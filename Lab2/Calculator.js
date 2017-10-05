function Calculator(calculator) {
   var myvalue = 10;
   document.querySelector("input").addEventListener("click", on_click);
   document.querySelector("input").addEventListener("keypress", on_keypress);

   function on_click() {
     document.querySelector("input").value = myvalue;
   }

   function on_keypress() {
     document.querySelector("input").value = 9;
   }
}
Calculator(document.getElementById('calculator'));