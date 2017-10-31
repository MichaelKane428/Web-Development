import Rx from 'rxjs/Rx';

// The code below is from the following link. I relied on the code examples heavily to get the question done.
// http://chenyumin.com/p/use-reactivex-rxjs-to-build-a-stream-driven-stopwatch
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// https://www.npmjs.com/package/stopwatch-stream
// https://www.w3schools.com/tags/canvas_beginpath.asp
// https://www.w3schools.com/tags/canvas_arc.asp
// https://www.w3schools.com/tags/canvas_lineto.asp
// https://www.w3schools.com/tags/canvas_moveto.asp
// https://www.w3schools.com/tags/canvas_clearrect.asp
const canvas = document.getElementById('canvas');
const time = document.getElementById('time');
const split_time = document.getElementById('split_time');

const counter = Rx.Observable.interval(100);

let start_timer = false;
let clock = 0;

const subscription = counter.subscribe( digit => {
    if(!start_timer) return;
    clock++;
    create_stopwatch(clock);
    time.innerHTML = Math.floor(clock/600)+":"+Math.floor((clock/10)% 60)+":"+(clock % 10) + "0";
});

// Start the clock.
Rx.Observable.fromEvent(document.getElementById('start'), 'click')
	.subscribe(event =>{
	start_timer = true;
});

// Stop the clock.
Rx.Observable.fromEvent(document.getElementById('stop'), 'click')
	.subscribe(event =>{
	start_timer = false;
});

// Print each split time to the screen.
Rx.Observable.fromEvent(document.getElementById('split'), 'click')
	.subscribe(event =>{
	split_time.innerHTML += time.innerHTML + "<br/>";
});

// Stop the timer and reset the clock to 0
Rx.Observable.fromEvent(document.getElementById('reset'), 'click')
	.subscribe(event =>{
	start_timer = false;
	clock = 0;
	create_stopwatch(time);
	time.innerHTML = "0:0:00";
	split_time.innerHTML = "";
});

const create_stopwatch = (clock) => {
    if (canvas.getContext) {
    const stopwatch = canvas.getContext('2d');
    
    // clear after each tick
    stopwatch.clearRect(0, 0, canvas.width, canvas.height);

    const size = 96;
    
    //Start the stopwatch
    stopwatch.beginPath();

    // Create the clock.
    stopwatch.arc(size, size, size, 0, Math.PI * 2, true);
    
    // The code for both minute and second hands comes from: http://chenyumin.com/p/use-reactivex-rxjs-to-build-a-stream-driven-stopwatch
    // Create the minute hand.
    let angle = (clock / 600 / 60 - 0.25) * (Math.PI * 2);
    let armLength = size * 0.5;
    stopwatch.moveTo(size, size);
    stopwatch.lineTo(size + size * Math.cos(angle), size + armLength * Math.sin(angle));

    // Create the seconds hand.
    angle = (clock / 10 / 60 - 0.25) * (Math.PI * 2);
    armLength = size * 0.8;
    stopwatch.moveTo(size, size);
    stopwatch.lineTo(size + armLength * Math.cos(angle), size + armLength * Math.sin(angle));
    
    // Stop the stopwatch.
    stopwatch.stroke();
  }
}

create_clock();

