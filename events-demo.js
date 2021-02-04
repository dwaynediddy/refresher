var EventEmitter = require('events')
var emitter = new EventEmitter()

// emitter.on('Listener', function(listener) {
//     console.log('listener has been called')
// })
// emitter.emit('Listener')

// emitter.on('hello world', function() {
//     console.log('hello world listener called')
// })
// emitter.emit('hello world')

//could be creating a new user
emitter.on('FirstEvent', function(data) {
    console.log('Firstevent has been triggered')
    emitter.emit('SecondEvent')
})
//could save the user to database
emitter.on('SecondEvent', function(data) {
    console.log('SecondEvent has been triggered')
    emitter.emit('ThirdEvent')
})
// could trigger functionality to reflect this change in the browser
emitter.on('ThirdEvent', function(data) {
    console.log('ThirdEvent and final event has been triggered')
})
emitter.emit('FirstEvent')