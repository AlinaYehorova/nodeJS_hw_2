const EventEmitter = require('events')
const emitter = new EventEmitter()

const sendMessage = (username, message, emitter) => {
emitter.emit('message', username, message)
}

emitter.on('message', (username, message) => {
  console.log(`${username}: ${message}`);
  
})

sendMessage('Alina','Hello, everyone!', emitter)
sendMessage('Elmira', 'Hi :)', emitter)
sendMessage('Irina', 'Good morning!', emitter)