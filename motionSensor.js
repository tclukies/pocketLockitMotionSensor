const Gpio = require('onoff').Gpio;
const led = new Gpio(13, 'out'); // gpio 4 as out

//   socket.emit('chat message', $('#m').val());

// function lock(){
//     socket.emit("lock", 99)
// }

// lock()

iv = setInterval(function() {
    console.log((led.readSync()))
}, 200);