const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log(fruits);

const numbers1 = new Array(1, 2, 3, 4, 5);
console.log(numbers1);

let mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];
console.log(mixed);

let val;
val = numbers.length;
console.log(val,'length');

val = Array.isArray(numbers);
console.log(val);

val = numbers[3];
console.log(val);

numbers[3] = 100;
console.log(numbers);

val = numbers.indexOf(100);
console.log(val);

//mutating arrays
numbers.push(200);
console.log(numbers);

numbers.unshift(300);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.splice(1, 2);
console.log(numbers);

numbers.reverse();
console.log(numbers);

val = numbers.concat(fruits);
console.log(val);

val = numbers.sort();
console.log(val);



