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

iv = setInterval(function() {
    console.log((led.readSync()))
    console.log((led2.readSync()))
    console.log((led3.readSync()))
    console.log((led4.readSync()))
    console.log(("---"))

}, 200);