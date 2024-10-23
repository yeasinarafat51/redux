const order = 1;

const first = order.toString().padStart(4, "0");

const second = parseInt(first.substring(3)) + 1;

const secid = second.toString().padStart(4, "0");
console.log(secid)