const Gpio = require('onoff').Gpio;
const motion = new Gpio(13, 'in'); // gpio 4 as in
const LED = new Gpio(25, 'out'); // gpio 4 as out


//   socket.emit('chat message', $('#m').val());

// function lock(){
//     socket.emit("lock", 99)
// }

// lock()
let currentValue = motion.readSync();
console.log("currentValue" + currentValue)

let lastValue = motion.readSync();
console.log("lastValue" + lastValue)


iv = setInterval(function() {
currentValue = motion.readSync();
if (currentValue != lastValue){
    console.log("tampered!!!!!!")
    console.log(currentValue + " " +lastValue)
    lastValue = currentValue
    const timer = setInterval(()=>{
        if (LED.readSync() === 0) { // if current pin state is 0 (off)
          LED.writeSync(1); // make it 1 (on)
        } else {
          LED.writeSync(0); // make it 0 (off)
        }
      }, 1000);

}
}, 200);

// iv2 = setInterval(function() {
   
//     console.log(led.readSync())
//     // console.log(led2.readSync())
//     // console.log(led3.readSync())
//     // console.log(led4.readSync())
//     console.log("_________")

//     }, 200);

