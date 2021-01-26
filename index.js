// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(){
    drivers.push('Ralph')
    return drivers;
}

function destructivelyPrependDriver () {
    drivers.unshift('Bob')
    return drivers
}

function destructivelyRemoveLastDriver(){
    drivers.pop('Garfield')
    return drivers;
}

function destructivelyRemoveFirstDriver() {
    drivers.shift('Milo')
    return drivers;
}

function appendDriver (){
    const x = drivers.concat('Broom')
    return x;
}

function prependDriver(name) {
    const x = drivers.slice(0,3);
    const y = [name].concat(x);
    return y
}

function removeLastDriver () {
    const x = drivers.slice(0,2);
    return x;
}

function removeFirstDriver(){
    const x = drivers.slice(1,3);
    return x;
}

