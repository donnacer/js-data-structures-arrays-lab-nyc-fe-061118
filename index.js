// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name) {
  drivers.push(name)
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
} 

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}


function appendDriver(name) {
  const drivers = ['Ralph', ...name]
} 
function prependDriver(name) {
const drivers = ['Ralph', ...name]
}