const Gpio = require('onoff').Gpio;
const led = new Gpio(13, 'out'); // gpio 4 as out
const led2 = new Gpio(19, 'out'); // gpio 4 as out
const led3 = new Gpio(18, 'out'); // gpio 4 as out
const led4 = new Gpio(16, 'out'); // gpio 4 as out


//   socket.emit('chat message', $('#m').val());

// function lock(){
//     socket.emit("lock", 99)
// }

// lock()
let currentValue = led2.readSync();
console.log("currentValue" + currentValue)

let lastValue = led2.readSync();
console.log("lastValue" + lastValue)


iv = setInterval(function() {
currentValue = led2.readSync();
if (currentValue != lastValue){
    console.log("tampered!!!!!!")
    lastValue = currentValue
}
}, 200);